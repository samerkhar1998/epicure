import heroImg from "../../data/images/hompePage_img.png"
import Search from "../../shared/header/headerImges/Search"
import { MainContainer,Img, Container, SubContainer, SearchBox, Input } from "./styles"
import magnifier from "../../data/images/search.svg";

export default function Hero(){
    return(
        <MainContainer>
            <Img src={heroImg} alt="hero img" />
            <Container>
                <SubContainer>Epicure works with the top chef restaurantsin in Tel Aviv</SubContainer>
                <SearchBox>
                    <img src={magnifier} alt="magnifier img" />
                    <Input placeholder="Search for restaurant cuisine, chef"></Input>
                </SearchBox>
            </Container>
        </MainContainer>
    )
}