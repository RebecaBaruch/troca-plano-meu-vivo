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

function OfferDetails(): JSX.Element{
    const navigate = useNavigate();

    const handleBackNavigateButton = () => {
        navigate(-1)
    }

    const handleMoredDigitalServicesNavButton = () => {
        navigate('/mais-servicos-digitais')
    }

    const handleButtonNewPlan = () => {
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
                                onPress={() => handleButtonNewPlan()}
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
                        <React.Fragment>
                            <Row 
                                title={`Vivo Fibra 500 Mega`}
                                description={`Mais velocidade pra navegar no seu celular, computador ou TV`}
                                asset={<IconWifiRegular color={skinVars.colors.promoHighInverse} />}
                            />
                        </React.Fragment>

                        <Box paddingTop={64} paddingLeft={16}>
                            <Title1>
                                {`Serviços digitais inclusos`}
                            </Title1>
                        </Box>

                        <React.Fragment>
                            <Box paddingTop={16}>
                                <RowList>
                                    <Row 
                                        title={`Paramount`}
                                        description={`Entretenimento`}
                                        asset={<Avatar size={40} />}
                                    />
                                </RowList>
                            </Box>
                        </React.Fragment>

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