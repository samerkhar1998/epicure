import Cart from "../../assets/headerImges/Cart";
import Hamburger from "../../assets/headerImges/Hamburger";
import Logo from "../../assets/headerImges/Logo";
import Profile from "../../assets/headerImges/Profile";
import Search from "../../assets/headerImges/Search";
import { LeftColumn, CenterColumn, RightColumn, Row } from "./styles";


export default function Header(){
    return(
            <Row>
                <LeftColumn ><Hamburger/></LeftColumn>
                <CenterColumn><Logo/></CenterColumn>
                <RightColumn>
                        <Search/>
                        <Profile/>
                        <Cart/>
                </RightColumn>
            </Row>
        
    )
}