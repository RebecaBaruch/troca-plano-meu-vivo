import React from "react"
import { 
    FixedFooterLayout, 
    ResponsiveLayout, 
    Box, 
    Inline, 
    Text1, 
    Text3, 
    ButtonPrimary, 
    RadioGroup, 
    BoxedRow, 
    Text2, 
    TextLink, 
    NavigationBar
} from "@telefonica/mistica";
import { useNavigate } from "react-router-dom";

function VivoFibra(): JSX.Element{
    const navigate = useNavigate()

    const handleBackNavigateButton = () => {
        navigate(-1)
    }

    return(
        <>
            <NavigationBar
                onBack={() => {handleBackNavigateButton()}}
                isInverse
                title='Vivo Fibra'
            />
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
                                            {`R$ 159,99/mês`}
                                        </Text3>
 
                                        <Text1 as="p" regular>
                                            {`/mês`}
                                        </Text1>
                                                    
                                    </Inline>
                                </Box>

                                <Box>
                                    <ButtonPrimary onPress={() => {}}>
                                        {`Confirmar`}
                                    </ButtonPrimary>
                                </Box>
                            </Inline>
                        </Box>
                    </ResponsiveLayout>
                }
            >
                <ResponsiveLayout>
                    <RadioGroup name="card" defaultValue={'vivo-fibra-700'}>
                        <Box paddingTop={24}>
                            <React.Fragment>
                                <BoxedRow
                                    title=""
                                    extra={
                                        <Box>
                                            <Box>
                                                <Text3 medium as="p">
                                                    {`Vivo Fibra 700 Mega`}
                                                </Text3>
                                            </Box>

                                            <Inline space={0} alignItems="baseline">
                                                <Text2 as="p" medium>
                                                    {`R$ 199,99/mês`}
                                                </Text2>

                                                <Text2 as="p" medium>
                                                    {`/mês`}
                                                </Text2>
                                            </Inline>

                                            <Box paddingTop={12}>
                                                <TextLink
                                                    style={{
                                                        textDecoration: 'none',
                                                        fontSize: '14px',
                                                        fontWeight: 500,
                                                    }}
                                                    onPress={() => {}}
                                                >
                                                    {`Conferir detalhes`}
                                                </TextLink>
                                            </Box>
                                        </Box>
                                    }
                                    radioValue={'vivo-fibra-700'}
                                    onPress={() => {}}
                                />
                            </React.Fragment>
                        </Box>
                        <Box>
                            <React.Fragment>
                                <Box paddingTop={16}>
                                    <BoxedRow
                                        title=""
                                        extra={
                                            <Box>
                                                <Box>
                                                    <Text3 medium as="p">
                                                        {`Vivo Fibra 700 Mega + Netflix`}
                                                    </Text3>
                                                </Box>

                                                <Inline space={0} alignItems="baseline">
                                                    <Text2 as="p" medium>
                                                        {`R$ 189,99/mês`}
                                                    </Text2>

                                                    <Text2 as="p" medium>
                                                        {`/mês`}
                                                    </Text2>
                                                </Inline>

                                                <Box paddingTop={12}>
                                                    <TextLink
                                                        style={{
                                                            textDecoration: 'none',
                                                            fontSize: '14px',
                                                            fontWeight: 500,
                                                        }}
                                                        onPress={() => {}}
                                                    >
                                                        {`Conferir detalhes`}
                                                    </TextLink>
                                                </Box>
                                            </Box>
                                        }
                                        radioValue={'vivo-fibra-700-netflix'}
                                        onPress={() => {}}
                                    />
                                </Box>
                            </React.Fragment>
                        </Box>
                    </RadioGroup>
                </ResponsiveLayout>
            </FixedFooterLayout>
        </>
    )
}

export default VivoFibra;