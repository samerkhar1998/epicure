import { useState } from "react";
import magnifier from "../../../../data/images/search.svg";
import { Button, CloseMenu, Container, MenuContainer } from "../sharedStyles";
import { SearchBar, SearchContainer, SearchIcon } from "./styles";


export default function Search(style:{}){
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setOpen(!open)}><img src={magnifier} alt="magnifier img"/></Button>
            <MenuContainer open={open}>
                <CloseMenu  onClick={() => setOpen(!open)}/>
                <Container>
                     <SearchContainer>
                        <SearchIcon />
                        <SearchBar placeholder="Search for restaurant cuisine, chef"/>
                     </SearchContainer>
                </Container>
            </MenuContainer>
        </>
        
    )
}