import hamburgerImg from "../../../data/images/hamburber.svg";
import { Button } from "./styles";
import {useNavigate} from 'react-router-dom';

export default function Hamburger(){
    // const navigate = useNavigate();
    return(
        <>
        <Button><img src={hamburgerImg} alt="hamburger img" /></Button>
        {/* <dialog 
        open={hamburgerStatus}
        onClose={handleCloseHamburger}
        style={{height:"fit-content"}}
        scroll="body" 
        fullScreen={true}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"></dialog> */}
        </>
    )
}