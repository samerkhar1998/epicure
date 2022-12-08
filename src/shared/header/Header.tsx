import Cart from "./headerImges/Cart";
import Hamburger from "./headerImges/burger/Hamburger";
import Logo from "./headerImges/Logo";
import Profile from "./headerImges/Profile";
import Search from "./headerImges/search/Search";
import { LeftColumn, CenterColumn, RightColumn, Row } from "./styles";


export default function Header(){
    return(
            <Row>
                <LeftColumn ><Hamburger/></LeftColumn>
                <CenterColumn><Logo /></CenterColumn>
                <RightColumn>
                        <Search/>
                        <Profile/>
                        <Cart/>
                </RightColumn>
            </Row>
        
    )
}