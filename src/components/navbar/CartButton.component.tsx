import { useState } from 'react';
import { CartDrawer } from '../card/CardDrawerComponent';
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'

interface CartButtonProps {
    cartTotalQuantity: number;
}

const CartButton = ({ cartTotalQuantity }: CartButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button
                variant="outline"
                size="icon"
                className="relative"
                aria-label="Abrir carrito"
                onClick={() => setIsOpen(!isOpen)}
            >
                <ShoppingCart className="h-5 w-5" />
                {
                    cartTotalQuantity > 0 && (
                        <Badge
                            className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full p-0"
                            variant={"destructive"}>
                            {cartTotalQuantity}
                        </Badge>
                    )
                }
            </Button>
            <CartDrawer open={isOpen} onOpenChange={setIsOpen} />
        </>
    )
}

export default CartButton

