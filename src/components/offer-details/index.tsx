import React from "react";
import { 
    Box,
    ButtonFixedFooterLayout, 
    ButtonPrimary, 
    IconWifiRegular, 
    NavigationBar, 
    Row, 
    TextLink,
    skinVars
} from "@telefonica/mistica";

function OfferDetails(): JSX.Element{
    return(
        <>
            <React.Fragment>
                <NavigationBar
                    onBack={() => {}}
                    isInverse
                    title="Sobre o plano"
                />
                <Box paddingTop={24}>
                    <ButtonFixedFooterLayout
                        button={
                            <ButtonPrimary
                                onPress={() => console.log('Quero esse')}
                            >
                                Quero esse
                            </ButtonPrimary>
                        }

                        link={
                            <TextLink 
                                style={{fontSize: '14px', fontWeight: 500}}
                                onPress={() => console.log('Exibir mais ofertas')}
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
                    </ButtonFixedFooterLayout>
                </Box>
            </React.Fragment>
        </>
    )
}

export default OfferDetails;