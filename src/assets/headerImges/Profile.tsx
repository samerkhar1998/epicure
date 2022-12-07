import profileImg from "../../data/images/account.svg";
import { Button } from "./styles";

export default function Profile(){

    return (
        <Button><img src={profileImg} alt="profile img"/></Button>
    )
}