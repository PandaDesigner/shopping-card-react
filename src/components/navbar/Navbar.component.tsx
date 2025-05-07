import {
    Menubar,
    MenubarMenu,
} from "@/components/ui/menubar.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import { useProduct } from "@/models/products/hooks/useProduct.tsx";
import CartButton from './CartButton.component';


export const NavbarComponent = () => {
    const { cartTotalQuantity } = useProduct()
    return (
        <div className="container p-4 sticky top-2 z-10 mx-auto">
            <Menubar className="px-4 py-8 justify-between gap-4 bg-white rounded-lg shadow-lg">
                <MenubarMenu>
                    <div className="flex gap-4">
                        <Button asChild variant="ghost"
                            className="flex items-center gap-2 font-bold text-sm text-slate-600">
                            <Link to="/">
                                <ShoppingCart className="h-5 w-5" />
                                <span>TiendaFácil</span>
                            </Link>
                        </Button>
                        <Button variant="secondary"><Link to="/products">Shop</Link></Button>
                    </div>
                    <CartButton cartTotalQuantity={cartTotalQuantity} />
                </MenubarMenu>
            </Menubar>
        </div>
    );
};