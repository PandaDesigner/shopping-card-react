import { Link } from "react-router";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, X } from "lucide-react";
import { useProduct } from "@/models/products/hooks/useProduct.tsx";
import type { IProductMapper } from '@/models/products/product.interface';

interface ProductCardProps {
    product: IProductMapper;
}

export const CardComponent = ({ product }: ProductCardProps) => {
    const { id, name, price, originalPrice, image, category } = product

    const { addedToCart, handleAddToCart } = useProduct();

    const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

    return (
        <Card
            className="relative drop-shadow-xs overflow-hidden min-w-[300px] w-[300px] grow flex-1 shrink shadow-md  transition-all hover:scale-102 hover:drop-shadow-2xl p-0 pb-18 hover:z-5">
            <CardHeader className="p-0">
                <Link to={`/producto/${id}`}>
                    <div className="relative aspect-square overflow-hidden">
                        <img
                            src={image || "/placeholder.svg"}
                            alt={name}
                            className="object-cover transition-transform hover:scale-105 w-full h-full"
                        />
                        {discount > 0 && <Badge className="absolute right-2 top-2 bg-red-500">-{discount}%</Badge>}
                    </div>
                </Link>
            </CardHeader>
            <CardContent className="p-4">
                <div className="space-y-1">
                    <Badge variant="outline" className="text-xs">
                        {category}
                    </Badge>
                    <Link to={`/producto/${id}`} className="block">
                        <h3 className="font-medium text-sm line-clamp-2">{name}</h3>
                    </Link>
                    <div className="flex items-center gap-2">
                        <span className="font-bold">${price.toFixed(2)}</span>
                        {originalPrice && (
                            <span
                                className="text-sm text-muted-foreground line-through">${originalPrice.toFixed(2)}</span>
                        )}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 bottom-2 absolute left-0 right-0">
                <Button onClick={() => handleAddToCart(id)}
                    className="w-full"
                    variant={addedToCart ? "destructive" : "default"}
                >
                    {addedToCart ? <X />
                        : <ShoppingCart className="mr-2 h-4 w-4" />}
                    {`${addedToCart ? "Eliminar del carrito" : "Agregar al carrito"}`}
                </Button>
            </CardFooter>
        </Card>
    );
};