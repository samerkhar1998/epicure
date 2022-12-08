import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "../shared/footer/Footer";
import Header from "../shared/header/Header";
import Chefs from "./chefs/Chefs";
import ContactUs from "./contactUs/ContactUs";
import Dishes from "./dishes/Dishes";
import Home from "./homepage/mobileHomePage/MobileHome";
import PrivacyPolicy from "./privacyPolicy/PrivacyPolicy";
import Restaurants from "./restaurants/Restaurants";
import TermsOfUse from "./termsOfUse/TermsOfUse";

export default function Layout(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>\
                <Route path='' element={<Home/>}/>
                <Route path="/restaurants" element={<Restaurants/>}/>
                <Route path="/chefs" element={<Chefs/>}/>
                <Route path="/dishes" element={<Dishes/>}/>
                <Route path="/contactUs" element={<ContactUs/>}/>
                <Route path="/privacyPolicy" element={<PrivacyPolicy/>}/>
                <Route path="/termsOfUse" element={<TermsOfUse/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>  
    )
};