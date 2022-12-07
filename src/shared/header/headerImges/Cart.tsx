import cartImg from "../../../data/images/cart.svg";

import { Button } from "./styles";

export default function Cart(){
    return(
        <Button><img src={cartImg} alt="cart image" /></Button>
    )

}