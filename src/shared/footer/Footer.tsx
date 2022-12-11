import { useNavigate } from "react-router-dom";
import { MainRectanlge, Button } from "./styles";



export default function Footer(){
    const navigate = useNavigate();
    return (
            <MainRectanlge>
                <Button order={0} onClick={() => navigate('contactUs')}>Contact Us</Button>
                <Button order={1} onClick={() => navigate('termsOfUse')}>Term of Use</Button>
                <Button order={2} onClick={() => navigate('privacyPolicy')}>Privacy Policy</Button>
            </MainRectanlge>
    )
}