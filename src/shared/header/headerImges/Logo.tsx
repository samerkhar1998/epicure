import { useNavigate } from "react-router-dom";
import logoImg from "../../../data/images/logo.svg";
import { Button } from "./sharedStyles";


export default function Logo(){
    const navigate = useNavigate();
    return (
        <Button onClick={() => navigate("")}><img src={logoImg} alt="logo img"/></Button>
    )
}