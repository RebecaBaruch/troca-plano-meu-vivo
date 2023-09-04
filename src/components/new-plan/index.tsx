import React from "react"
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

function NewPlan(): JSX.Element{
    const handleButtonConfirm = () => {
        console.log('Confirmar')
    }

    const handleButtonLink = () => {
        console.log('Alterar')
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
                                                {`R$195,99`}
                                            </Text3>
                                            <Text1 as="p" regular>
                                                {`/dia`}
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
                            onBack={() => {}}
                            isInverse
                            title='Novo plano'
                        />
                        <Box paddingTop={24}>
                        <Row
                            title={`Vivo Fibra 500 Mega
                            Netflix Premium`}
                            description={`R$ 195,99/mês`}
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