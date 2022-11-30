import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Restaurants from "./restaurants/Restaurants";

export default function Layout(){
    return(
        <BrowserRouter>
            <Routes>\
                <Route path='' element={<Home/>}/>
                <Route path="/restaurants" element={<Restaurants/>}/>
            </Routes>
        </BrowserRouter>        
    )
};