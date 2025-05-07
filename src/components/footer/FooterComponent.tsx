import {Link} from "react-router";

export const FooterComponent = () => {
    return (
        <footer className="border-t py-6 md:py-8 bg-gray-100">
            <div className="container flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between mx-auto">
                <p className="text-sm text-muted-foreground">© 2025 TiendaFácil. Todos los derechos reservados.</p>
                <div className="flex gap-4">
                    <Link to="#" className="text-sm text-muted-foreground hover:underline">
                        Términos
                    </Link>
                    <Link to="#" className="text-sm text-muted-foreground hover:underline">
                        Privacidad
                    </Link>
                    <Link to="#" className="text-sm text-muted-foreground hover:underline">
                        Contacto
                    </Link>
                </div>
            </div>
        </footer>
    );
};