import React from "react";
import { useNavigate } from "react-router-dom";
import { 
    Avatar,
    Box,
    NavigationBar,
    Row,
    RowList, 
} from "@telefonica/mistica";
import useCartData from "../../../hook/use-cart-data";
import { Offer } from "../../../types";

function MoreDigitalServices(): JSX.Element{
    const {takeOffersDetails} = useCartData();
    const offersDetails = takeOffersDetails();
    
    const navigate = useNavigate();

    const handleBackNavigateButton = () => {
        navigate(-1);
    }

    const renderSubproducts = (subItem: { name: string; category: string }) => {
        return(
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
    }

    return(
            <>
                <React.Fragment>
                    <NavigationBar
                        onBack={()=> {handleBackNavigateButton()}}                            
                        isInverse
                        title={`Serviços digitais`}
                     />
            
                    <Box paddingTop={32}>
                        {offersDetails.map((item: Offer) => (
                            item.subProducts.map(renderSubproducts)
                        ))}
                    </Box>
                </React.Fragment>
             </>
    )
}

export default MoreDigitalServices;