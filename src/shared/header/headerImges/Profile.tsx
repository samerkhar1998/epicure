import profileImg from "../../../data/images/account.svg";
import { Button } from "./sharedStyles";

export default function Profile(){

    return (
        <Button><img src={profileImg} alt="profile img"/></Button>
    )
}