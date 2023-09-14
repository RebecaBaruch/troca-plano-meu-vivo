import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react' ;
import { planMock } from '../../mock';
import { 
  Box, 
  ButtonFixedFooterLayout, 
  ButtonPrimary, 
  DataCard, 
  IconArrowDownLight, 
  IconArrowUpLight, 
  Inline, 
  NavigationBar, 
  ResponsiveLayout,
  Text2,
  Text3,
  Text4,
  Text6,
  TextLink,
  skinVars,
} from '@telefonica/mistica';
import { GetOffers, Offer } from '../../types';
import useCartData from '../../hook/use-cart-data';
import useDataFormat from '../../hook/use-data-format';

function OfferRecommended() {
  const {
    pricePeriod,
    priceFormat,
  } = useDataFormat();

  const navigate = useNavigate();
  
  // const [isLoading, setIsLoading] = useState(true);
  const {
    sendInternetPlanSelected, 
    sendAllOffers,
    sendOffersDetails
  } = useCartData()
  const [getOffers, setGetOffers] = useState<GetOffers[]>([]);

  const handleButtonCheckOfferDetails = (item: Array<Offer>) => {
    sendOffersDetails(item)
    navigate('/detalhes-ofertas');
  };
  
  const handleButtonNewPlan = (planItem: Offer) => {
    sendInternetPlanSelected(planItem);
    navigate('/checkout');
  }

  const handleButtonShowMoreOffers = () => {
    navigate('/mais-ofertas');
  }

  useEffect(() => {
    const fetchDataFromMock = async () => {
      try {
        const mockData = planMock;
        setGetOffers([mockData]);
        // setIsLoading(false)
      } catch (error) {
        return('Erro ao buscar dados do mock' + error);
        // setIsLoading(false);
      }
    }

    fetchDataFromMock();
  }, []);

  useEffect(() => {
    return getOffers.length
        ? sendAllOffers(getOffers)
        : window.sessionStorage.removeItem('plan-change-ALL_OFFERS');
  }, [sendAllOffers, getOffers]);

  return (
    <>
      <Box>
          <React.Fragment>
            <NavigationBar
              onBack={() => {}}
              isInverse
              title='Troca de plano'
            />
              <Box paddingTop={24} paddingX={12}>
                <ResponsiveLayout>
                  {getOffers.map((item) => (
                    <React.Fragment key={item.bestOffer.offerId}>
                      <Text6 as='p'>{item.ownerPlan.title}</Text6>
                      <Box paddingTop={32}>
                        <Text3 as='p' regular>
                          {item.ownerPlan.plan}
                        </Text3>
                        <Inline space={0} alignItems='baseline'>
                          <Text2 as='p' regular>
                            {priceFormat(item)}
                          </Text2>
                          <Text2 as='p' regular>
                              {pricePeriod(item)}
                          </Text2>
                        </Inline>
                      </Box>
                    </React.Fragment>
                  ))}
                </ResponsiveLayout>

                {getOffers.map((item) => (
                  <React.Fragment key={item.bestOffer.offerId}>
                    <ButtonFixedFooterLayout
                      button={
                        <ButtonPrimary 
                          onPress={() => handleButtonNewPlan(item.bestOffer)}>
                            Quero esse
                        </ButtonPrimary>
                      }

                      link={
                        <TextLink 
                            style={{fontSize: '14px', fontWeight: 500}}
                            onPress={() => handleButtonShowMoreOffers()}
                        >
                            Exibir mais ofertas
                        </TextLink>
                      }
                      >
                      <ResponsiveLayout>
                        <Box paddingTop={32}>
                          <DataCard
                            headline={`Oferta para você`}
                            extra={
                              <>
                                <Box paddingTop={16}>
                                  <Text4 as='p' medium>
                                    {item.bestOffer.displayName}
                                  </Text4>
                                  <Inline space={0} alignItems='baseline'>
                                    <Text6>
                                      {priceFormat(item)}
                                    </Text6>
                                    
                                    <Text2 as='p' regular>
                                      {pricePeriod(item)}
                                    </Text2>
                                  </Inline>
                                </Box>
                                
                                {item.bestOffer.download && item.bestOffer.upload && (
                                  <>
                                    <Box paddingTop={24}>
                                      <Inline space={4} alignItems="center">
                                        <Box>
                                          <IconArrowDownLight
                                            color={skinVars.colors.promoHighInverse}
                                          />
                                        </Box>

                                        <Box>
                                          <Box>
                                            <Text2 as="p" regular>
                                              {item.bestOffer.download}
                                            </Text2>
                                          </Box>
                                        </Box>
                                      </Inline>
                                    </Box>

                                    <Box paddingTop={8}>
                                      <Inline space={4} alignItems="center">
                                        <Box>
                                          <IconArrowUpLight
                                            color={skinVars.colors.promoHighInverse}
                                          />
                                        </Box>

                                        <Box>
                                          <Box>
                                            <Text2 as="p" regular>
                                              {item.bestOffer.upload}
                                            </Text2>
                                          </Box>
                                        </Box>
                                      </Inline>
                                    </Box>
                                  </>
                                )}

                                <Box paddingY={24}>
                                  <TextLink 
                                    onPress={() => {
                                      handleButtonCheckOfferDetails([item.bestOffer])
                                    }}
                                    style={{fontSize: '14px', fontWeight: 700}}
                                  >
                                    {`Conferir detalhes`}
                                  </TextLink>
                                </Box>
                              </>
                            }
                          />
                        </Box>
                      </ResponsiveLayout>
                    </ButtonFixedFooterLayout>
                  </React.Fragment>
                ))}
            </Box>
          </React.Fragment>
      </Box>
    </>
  );
}

export default OfferRecommended;
