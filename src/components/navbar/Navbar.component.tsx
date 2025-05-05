import {
    Menubar ,
    MenubarMenu ,
} from "@/components/ui/menubar.tsx";
import {Button} from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge"
import {ShoppingCart} from "lucide-react";
import {Link} from "react-router";


export const NavbarComponent = () => {
    return (
        <div className="p-4 sticky top-2 z-10">
            <Menubar className="px-4 py-8 justify-between gap-4 bg-white rounded-lg shadow-lg">
                <MenubarMenu>
                    <div className="flex gap-4">
                        <Button asChild variant="ghost" className="flex items-center gap-2 font-bold text-sm text-slate-600">
                            <Link to="/">
                                <ShoppingCart className="h-5 w-5" />
                                <span>TiendaFácil</span>
                            </Link>
                        </Button>
                        <Button variant="secondary"><Link to="/products">Shop</Link></Button>
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        className="relative"
                        aria-label="Abrir carrito">
                        <ShoppingCart className="h-5 w-5" />
                        <Badge className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full p-0"
                        variant={"destructive"}>
                            2
                        </Badge>
                    </Button>
                </MenubarMenu>
            </Menubar>
        </div>
    );
};