
import { ShoppingCart, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from '../ui/drawer'
import { Separator } from '../ui/separator'
import { useProduct } from '@/models/products/hooks/useProduct'
import { CartComponent } from './CartComponent'
import { reportJsPdf } from '@/models/jspdf/jspdfAdapter.impl'


interface CartDrawerProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}


export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
    const { cartProducts, upgradeQuantity, totalValuePrice, deleteProductFromCart, cleanFilterCart } = useProduct()
    const totalValue = cartProducts.reduce((acc, product) => acc += product.price * (product?.quantity || 1), 0)

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent>
                <div className="mx-auto w-full max-w-md">
                    <DrawerHeader>
                        <DrawerTitle className="flex items-center gap-2">
                            <ShoppingCart className="h-5 w-5" />
                            Carrito de compras
                        </DrawerTitle>
                        <DrawerDescription>
                            {cartProducts.length === 0
                                ? "Tu carrito está vacío"
                                : `${cartProducts.length} ${cartProducts.length === 1 ? "producto" : "productos"} en tu carrito`}
                        </DrawerDescription>
                        <DrawerClose className="absolute right-4 top-4">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Cerrar</span>
                        </DrawerClose>
                    </DrawerHeader>
                    <div className="px-4">
                        <Separator />
                    </div>
                    {cartProducts.length > 0 ? (
                        <div className="flex flex-col gap-4 p-4">
                            {cartProducts.map((item) => (
                                <CartComponent
                                    item={item}
                                    totalPrice={totalValuePrice}
                                    updateQuantity={upgradeQuantity}
                                    removeFromCart={deleteProductFromCart}
                                />
                            ))}

                            <div className="flex items-center justify-between">
                                <span className="font-medium">Total</span>
                                <span className="text-xl font-bold">${totalValue.toFixed(2)}</span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-4 p-8">
                            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
                            <p className="text-center text-muted-foreground">
                                Tu carrito está vacío. Agrega algunos productos para comenzar.
                            </p>
                        </div>
                    )}
                    <DrawerFooter>
                        <Button disabled={cartProducts.length === 0} onClick={() => reportJsPdf.generatePdf(cartProducts)} >Proceder al pago</Button>
                        {cartProducts.length > 0 && (
                            <Button variant="outline" onClick={cleanFilterCart}>
                                Vaciar carrito
                            </Button>
                        )}
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
