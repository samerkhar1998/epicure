import { useState } from "react";
import magnifier from "../../../../data/images/search.svg";
import { Button, CloseMenu, Container, MenuContainer } from "../sharedStyles";


export default function Search(style:{}){
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setOpen(!open)}><img src={magnifier} alt="magnifier img"/></Button>
            <MenuContainer open={open}>
                <CloseMenu  onClick={() => setOpen(!open)}/>
                <Container>
                     
                </Container>
            </MenuContainer>
        </>
        
    )
}