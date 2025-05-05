import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router";
import {useProduct} from "@/models/products/hooks/useProduct.tsx";
import {CardComponent} from "@/components/card/CardComponent.tsx";


export const HomePage = () => {

    const {dataProducts} = useProduct();



    console.log('dataProducts', dataProducts);

    return (
        <div className="container h-full">
            <section className="py-8 md:py-12 lg:py-16 bg-indigo-50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Descubre productos increíbles
                            </h1>
                            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                Encuentra todo lo que necesitas con los mejores precios y envío rápido.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Button asChild>
                                <Link to="/productos">Ver productos</Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link to="/products">Ofertas especiales</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8 md:py-12 lg:py-16 lg:my-8 flex flex-row flex-wrap gap-4">
                {
                        dataProducts?.map((product) => {
                            return <CardComponent
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                                category={product.category}
                            />
                        })
                }
            </section>
        </div>
    );
};