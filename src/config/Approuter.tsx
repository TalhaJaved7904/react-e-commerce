import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Cards from "../components/cards";
import ProductDetails from "../components/productdetails";

export default function Approuter() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cards />} />
                <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
        </BrowserRouter>

    </>
}