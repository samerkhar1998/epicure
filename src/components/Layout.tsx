import {BrowserRouter, Routes, Route} from "react-router-dom";
import Chefs from "./chefs/Chefs";
import Dishes from "./dishes/Dishes";
import Home from "./homepage/mobileHomePage/MobileHome";
import Restaurants from "./restaurants/Restaurants";

export default function Layout(){
    return(
        <BrowserRouter>
            <Routes>\
                <Route path='' element={<Home/>}/>
                <Route path="/restaurants" element={<Restaurants/>}/>
                <Route path="/chefs" element={<Chefs/>}/>
                <Route path="/chefs" element={<Dishes/>}/>
            </Routes>
        </BrowserRouter>        
    )
};