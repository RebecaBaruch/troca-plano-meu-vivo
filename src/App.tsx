import React from 'react';
import {useNavigate} from 'react-router-dom';
import { 
  Box, 
  ButtonFixedFooterLayout, 
  ButtonPrimary, 
  DataCard, 
  IconArrowDownRegular, 
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

function App() {
  const navigate = useNavigate()

  const handleButtonCheckOfferDetails = () => {
    navigate('/detalhes-ofertas');
  };
  
  const handleButtonNewPlan = () => {
    navigate('/novo-plano');
  }

  const handleButtonShowMoreOffers = () => {
    navigate('/mais-ofertas');
  }

  return (
    <>
      <Box>
          <React.Fragment>
            <NavigationBar
              onBack={() => {}}
              isInverse
              title='Troca de plano'
            />
            <ResponsiveLayout>
              <Box paddingTop={24} paddingX={12}>
                <ResponsiveLayout>
                    <Text6 as='p'>Tenha ainda mais velocidade por até R$x por mês</Text6>
                    <Box paddingTop={32}>
                      <Text3 as='p' regular>
                        {`Seus planos: Vivo Fibra 300 Mega e Netflix Padrão`}
                      </Text3>
                      <Inline space={0} alignItems='baseline'>
                        <Text2 as='p' regular>
                          {`R$77,77`}
                        </Text2>
                        <Text2 as='p' regular>/mês</Text2>
                      </Inline>
                    </Box>
                </ResponsiveLayout>

                <React.Fragment>
                  <ButtonFixedFooterLayout
                    button={
                      <ButtonPrimary 
                        onPress={() => handleButtonNewPlan()}>
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
                                  {`Vivo Fibra 500 Mega Netflix Premium`}
                                </Text4>
                                <Text6>
                                  {`R$ 195,99/mês`}
                                </Text6>
                              </Box>

                              <Box paddingTop={24}>
                                <Inline space={8}>
                                  <IconArrowDownRegular color={skinVars.colors.promoHighInverse} />
                                  <Text3 regular>{`Download com até 500 Mbps`}</Text3>
                                </Inline>
                              </Box>

                              <Box paddingY={24}>
                                <TextLink 
                                  onPress={() => {
                                    handleButtonCheckOfferDetails()
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
              </Box>
            </ResponsiveLayout>
          </React.Fragment>
      </Box>
    </>
  );
}

export default App;
