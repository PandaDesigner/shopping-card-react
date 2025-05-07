import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router";
import { useProduct } from "@/models/products/hooks/useProduct.tsx";
import { CardComponent } from "@/components/card/CardComponent.tsx";


export const HomePage = () => {

    const { productsStore } = useProduct();

    return (
        <div className="container h-full px-4">
            <section
                className="py-8 md:py-12 lg:py-16 bg-[url('hero.webp')] bg-cover bg-center bg-no-repeat rounded-xl relative overflow-hidden">
                <div className="container px-4 md:px-6 z-10">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2 z-5">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-fuchsia-200">
                                Descubre productos increíbles
                            </h1>
                            <p className="mx-auto max-w-[700px] md:text-xl text-white z-5">
                                Encuentra todo lo que necesitas con los mejores precios y envío rápido.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-4 z-5">
                            <Button asChild>
                                <Link to="/productos">Ver productos</Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link to="/products">Ofertas especiales</Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent backdrop-blur-xs"></div>
            </section>
            <section className="container py-8 md:py-12 lg:py-4 lg:my-2 flex flex-row flex-wrap gap-4 mx-auto max-w-[90%]">
                {
                    productsStore?.map((product) => {
                        return <CardComponent
                            key={product.id}
                            product={product}
                        />
                    })
                }
            </section>
        </div>
    );
};