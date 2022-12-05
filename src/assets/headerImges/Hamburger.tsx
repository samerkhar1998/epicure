import hamburgerImg from "../../data/images/hamburber.svg";

export default function Hamburger(){
    return(
        <>
        <img src={hamburgerImg} alt="hamburger img" />
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