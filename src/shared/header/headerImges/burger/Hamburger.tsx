
import { BurgerButton, Button, Line } from "./styles";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import { CloseMenu, Container, MenuContainer } from "../sharedStyles";

export default function Hamburger(){
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    return(
        <>
        <BurgerButton onClick={() => setOpen(!open) }></BurgerButton>
        
        <MenuContainer open={open}>
            <CloseMenu  onClick={() => setOpen(!open)}/>
            <Container>
                <Button order={0} onClick={() => [navigate("restaurants"), setOpen(!open)]}>Restaurants</Button>
                <Button order={1} onClick={() => [navigate("chefs"), setOpen(!open)]}>Chefs</Button>
                <Line/>
                <Button order={2} onClick={() => [navigate("contactUs"), setOpen(!open)]}>Contact Us</Button>
                <Button order={3} onClick={() => [navigate("termsOfUse"), setOpen(!open)]}>Term of Use</Button>
                <Button order={4} onClick={() => [navigate("privcyPolicy"), setOpen(!open)]}>Privacy Policy</Button>
            </Container>
        </MenuContainer>
        
        </>
    )
}