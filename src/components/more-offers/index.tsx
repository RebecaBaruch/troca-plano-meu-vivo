import React from "react";
import { useNavigate } from "react-router-dom";
import { 
    Avatar,
    Box,
    NavigationBar,
    Row,
    RowList, 
} from "@telefonica/mistica";

function MoreOffers(): JSX.Element{
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
                        title={`Serviços digitais`}
                />

                <Box paddingTop={32}>
                    <React.Fragment>
                        <RowList>
                            <Row 
                                title={`Paramount`}
                                description={`Entretenimento`}
                                asset={<Avatar size={40} />}
                            />
                        </RowList>
                    </React.Fragment>
                </Box>
            </React.Fragment>
        </>
    )
}

export default MoreOffers;