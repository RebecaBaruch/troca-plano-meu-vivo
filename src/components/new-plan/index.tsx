import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    ButtonLink,
    ButtonPrimary,
    Divider,
    FixedFooterLayout, 
    IconWifiRegular, 
    Inline, 
    NavigationBar, 
    ResponsiveLayout,
    Row,
    Stack,
    Text1,
    Text3,
    skinVars,
 } from "@telefonica/mistica";
import useCartData from "../../hook/use-cart-data";
import { Offer } from "../../types";
import useDataFormat from "../../hook/use-data-format";
 
function NewPlan(): JSX.Element{
    const navigate = useNavigate();
    
    const {takeInternetPlanSelected, totalPrice} = useCartData();
    const {priceFormat, pricePeriod} = useDataFormat();

    const newPlan: Offer = takeInternetPlanSelected();

    const handleBackNavigateButton = () => {
        navigate(-1);
    }

    const handleButtonConfirm = () => {
        console.log('Confirmar');
    }

    const handleButtonLink = () => {
        navigate('/vivo-fibra');
    }

    return(
        <>
            <React.Fragment>
                <FixedFooterLayout
                    footer={
                        <ResponsiveLayout>
                            <Box paddingY={16}>
                                <Inline space="between" alignItems="center">
                                    <Box>
                                        <Text1 regular as="p">
                                            {`Total a pagar`}
                                        </Text1>
                                        <Inline space={0} alignItems="baseline">
                                            <Text3 medium as="p">
                                                {priceFormat(String(totalPrice))}
                                            </Text3>
                                           
                                            <Text1 as="p" regular>
                                                {pricePeriod(newPlan)}
                                            </Text1>            
                                        </Inline>
                                    </Box>

                                    <Box>
                                        <ButtonPrimary onPress={() => handleButtonConfirm()}>
                                            {`Continuar`}
                                        </ButtonPrimary>
                                    </Box>
                                </Inline>
                            </Box>
                        </ResponsiveLayout>
                    }
                >
                        <NavigationBar
                            onBack={() => {handleBackNavigateButton()}}
                            isInverse
                            title='Novo plano'
                        />
                        <Box paddingTop={24}>
                        <Row
                            title={newPlan.displayName}
                            description={`
                                ${priceFormat(newPlan)}
                                ${pricePeriod(newPlan)}
                            `}
                            asset={<IconWifiRegular color={skinVars.colors.promoHighInverse} />}
                            right={
                                <Stack space="around">
                                    <ButtonLink onPress={() => handleButtonLink()}>
                                        {`Alterar`}
                                    </ButtonLink>
                                </Stack>
                            }
                        />

                        <Box>
                            <Divider />
                        </Box>
                    </Box>
                </FixedFooterLayout>
            </React.Fragment>
        </>
    )
}

export default NewPlan;