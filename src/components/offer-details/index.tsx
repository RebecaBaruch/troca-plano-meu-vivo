import React from "react";
import { useNavigate } from "react-router-dom";
import { 
    Avatar,
    Box,
    ButtonFixedFooterLayout, 
    ButtonLink, 
    ButtonPrimary, 
    IconWifiRegular, 
    NavigationBar, 
    Row, 
    RowList, 
    TextLink,
    Title1,
    skinVars
} from "@telefonica/mistica";
import useCartData from "../../hook/use-cart-data";
import { Offer } from "../../types";

function OfferDetails(): JSX.Element{
    const navigate = useNavigate();
    
    const {sendInternetPlanSelected, takeOffersDetails} = useCartData();
    const offersDetails = takeOffersDetails();

    const handleBackNavigateButton = () => {
        navigate(-1)
    }

    const handleMoredDigitalServicesNavButton = () => {
        navigate('/mais-servicos-digitais')
    }

    const handleButtonNewPlan = (planItem: Offer) => {
        sendInternetPlanSelected(planItem);
        navigate('/checkout');
    }

    const handleButtonShowMoreOffers = () => {
        navigate('/mais-ofertas');
    }

    return(
        <>
            <React.Fragment>
                <NavigationBar
                    onBack={()=> handleBackNavigateButton()}
                    isInverse
                    title="Sobre o plano"
                />
                <Box paddingTop={24}>
                    <ButtonFixedFooterLayout
                        button={
                            <ButtonPrimary
                                onPress={() => handleButtonNewPlan(offersDetails[0])}
                            >
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
                        {offersDetails.map((item: Offer) => (
                            <React.Fragment key={item.offerId}>
                                <Row 
                                    title={item.displayName }
                                    description={item.description}
                                    asset={<IconWifiRegular color={skinVars.colors.promoHighInverse} />}
                                />
                            </React.Fragment>
                        ))}

                        <Box paddingTop={64} paddingLeft={16}>
                            <Title1>
                                {`Serviços digitais inclusos`}
                            </Title1>
                        </Box>

                        {offersDetails.map((item: Offer) => (
                            item.subProducts.slice(0, 3).map((subItem) =>
                                <React.Fragment key={subItem.name}>
                                    <Box paddingTop={16}>
                                        <RowList>
                                            <Row 
                                                title={subItem.name}
                                                description={subItem.category}
                                                asset={<Avatar size={40} />}
                                            />
                                        </RowList>
                                    </Box>
                                </React.Fragment>
                            )
                        ))}

                        <Box paddingTop={16}>
                            <ButtonLink onPress={() => {handleMoredDigitalServicesNavButton()}}>
                                {`Mais serviços`}
                            </ButtonLink>
                        </Box>
                    </ButtonFixedFooterLayout>
                </Box>
            </React.Fragment>
        </>
    )
}

export default OfferDetails;