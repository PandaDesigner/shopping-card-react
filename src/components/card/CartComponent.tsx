import type { IProductMapper } from "@/models/products/product.interface.ts";
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button.tsx";
import { Separator } from "@/components/ui/separator.tsx";

interface CartComponentProps {
    item: IProductMapper;
    totalPrice: number;
    updateQuantity: (id: number, quantity: number) => void;
    removeFromCart: (id: number) => void;
}


export const CartComponent = ({
    item,
    updateQuantity,
    removeFromCart
}: CartComponentProps) => {
    return (
        <>
            <div key={item.id} className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-md">
                    <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                </div>
                <div className="flex-1 space-y-1">
                    <h4 className="font-medium line-clamp-1">{item.name}</h4>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-7 w-7"
                                onClick={() => updateQuantity(item.id, - 1)}
                            >
                                <Minus className="h-3 w-3" />
                                <span className="sr-only">Disminuir cantidad</span>
                            </Button>
                            <span className="w-6 text-center">{item.quantity}</span>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-7 w-7"
                                onClick={() => updateQuantity(item.id, 1)}
                            >
                                <Plus className="h-3 w-3" />
                                <span className="sr-only">Aumentar cantidad</span>
                            </Button>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-medium">${(item.price * (item?.quantity || 1)).toFixed(2)}</span>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7 text-muted-foreground"
                                onClick={() => removeFromCart(item.id)}
                            >
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Eliminar</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Separator className="my-2" />
        </>
    );
};