import React from "react";
import { useNavigate } from "react-router-dom";
import { 
    Box,
    ButtonLink,
    ButtonPrimary,
    DataCard,
    Inline,
    NavigationBar,
    Text2,
    Text3,
} from "@telefonica/mistica";
import useCartData from "../../hook/use-cart-data";
import useDataFormat from "../../hook/use-data-format";

function MoreOffers(): JSX.Element{
    const {takeAllOffers} = useCartData();
    const moreOffers = takeAllOffers();

    const {priceFormat, pricePeriod} = useDataFormat();

    const navigate = useNavigate();

    const handleBackNavigateButton = () => {
        navigate(-1)
    }

    return(
        <>
            <React.Fragment>
                <NavigationBar
                        onBack={()=> {handleBackNavigateButton()}}
                        isInverse
                        title={`Mais ofertas`}
                />

                <Box paddingTop={24} paddingBottom={40} paddingX={16}>
                    {moreOffers && 
                        moreOffers.map((item) => (
                            item.otherOffers.map((subItem) => (
                                <React.Fragment key={subItem.offerId}>
                                    <Box paddingTop={16}>
                                        <DataCard
                                            extra={
                                                <Box>
                                                    <Box>
                                                        <Text3 medium>
                                                            {subItem.displayName}
                                                        </Text3>
                                                    </Box>

                                                    <Inline space={0} alignItems="baseline">
                                                        <Text2 as="p" medium>
                                                            {`
                                                                ${priceFormat(subItem)}
                                                                ${pricePeriod(subItem)}
                                                            `}
                                                        </Text2>
                                                    </Inline>

                                                    <Box paddingTop={16}>
                                                        <Inline alignItems="center" space={4}>
                                                            <ButtonPrimary onPress={() =>{}}>
                                                                {'Quero esse'}                                                
                                                            </ButtonPrimary>
                                                            <ButtonLink onPress={() =>{}}>
                                                                {'Conferir detalhes'}
                                                            </ButtonLink>
                                                        </Inline>
                                                    </Box>
                                                </Box>
                                            }
                                        />
                                    </Box>
                                </React.Fragment>
                            ))
                        ))
                    }
                </Box>
                
            </React.Fragment>
        </>
    )
}

export default MoreOffers;