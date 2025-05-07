import {NavbarComponent} from "@/components/navbar/Navbar.component.tsx";
import {Navigate , Route , Routes} from "react-router";
import {HomePage} from "@/pages/HomePage.tsx";
import {ProductPage} from "@/pages/ProductPage.tsx";
import {CartPage} from "@/pages/CartPage.tsx";
import {FooterComponent} from "@/components/footer/FooterComponent.tsx";

function ShoppingCards () {

    return (
        <>
            <NavbarComponent/>
            <div className="container mt-4 mx-auto">
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/products" element={<ProductPage/>}></Route>
                    <Route path="/*" element={<Navigate to="/"/>}></Route>
                    <Route path="/cart" element={<CartPage/>}></Route>
                </Routes>
            </div>
            <FooterComponent/>
        </>
    )
}

export default ShoppingCards
