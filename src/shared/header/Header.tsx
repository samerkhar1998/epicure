import Cart from "../../assets/headerImges/Cart";
import Hamburger from "../../assets/headerImges/Hamburger";
import Logo from "../../assets/headerImges/Logo";
import Profile from "../../assets/headerImges/Profile";
import Search from "../../assets/headerImges/Search";
import { Column, NavBar, Row } from "./styles";


export default function Header(){
    return(
            <Row>
                <Column style={{width:"50%"}}><Hamburger/></Column>
                <Column><Logo/></Column>
                <Column>
                    <Row>   
                        <Column><Search/></Column>
                        <Column><Profile/></Column>
                        <Column><Cart/></Column>
                    </Row>
                </Column>
            </Row>
        
    )
}