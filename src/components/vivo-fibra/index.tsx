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
import useCartData from "../../hook/use-cart-data";
import { Offer } from "../../types";
import useDataFormat from "../../hook/use-data-format";

function VivoFibra(): JSX.Element{
    const {
        takeInternetPlanSelected,
        takeAllOffers,
        totalPrice
    } = useCartData();

    const {
        pricePeriod,
        priceFormat
    } = useDataFormat();

    const bestOffer = takeAllOffers().map((item) => item.bestOffer);
    const otherOffers = takeAllOffers()[0].otherOffers;

    const navigate = useNavigate()

    const newPlan: Offer = takeInternetPlanSelected()

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
                                            {priceFormat(totalPrice)}
                                        </Text3>
 
                                        <Text1 as="p" regular>
                                            {pricePeriod(newPlan)}
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
                    <RadioGroup name="card" defaultValue={bestOffer[0].offerId}>
                        <Box paddingTop={24}>
                            {bestOffer.map((item: Offer) => {
                                return <React.Fragment key={item.offerId}>
                                    <BoxedRow
                                        title=""
                                        extra={<Box>
                                            <Box>
                                                <Text3 medium as="p">
                                                    {item.displayName}
                                                </Text3>
                                            </Box>

                                            <Inline space={0} alignItems="baseline">
                                                <Text2 as="p" medium>
                                                    {priceFormat(item)}
                                                </Text2>

                                                <Text2 as="p" medium>
                                                    {pricePeriod(item)}
                                                </Text2>
                                            </Inline>

                                            <Box paddingTop={12}>
                                                <TextLink
                                                    style={{
                                                        textDecoration: 'none',
                                                        fontSize: '14px',
                                                        fontWeight: 500,
                                                    }}
                                                    onPress={() => { } }
                                                >
                                                    {`Conferir detalhes`}
                                                </TextLink>
                                            </Box>
                                        </Box>}
                                        radioValue={String(item.offerId)}
                                        onPress={() => { } } />
                                </React.Fragment>;
                            })}
                        </Box>
                        <Box>
                            {otherOffers.map((item: Offer) => {
                                return <React.Fragment key={item.offerId}>
                                <Box paddingTop={16}>
                                    <BoxedRow
                                        title=""
                                        extra={
                                            <Box>
                                                <Box>
                                                    <Text3 medium as="p">
                                                        {item.displayName}
                                                    </Text3>
                                                </Box>

                                                <Inline space={0} alignItems="baseline">
                                                    <Text2 as="p" medium>
                                                        {priceFormat(item)}
                                                    </Text2>

                                                    <Text2 as="p" medium>
                                                        {pricePeriod(item)}
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
                                        radioValue={String(item.offerId)}
                                        onPress={() => {}}
                                    />
                                </Box>
                            </React.Fragment>
                            
                            })}
                        </Box>
                    </RadioGroup>
                </ResponsiveLayout>
            </FixedFooterLayout>
        </>
    )
}

export default VivoFibra;