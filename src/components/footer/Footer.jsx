import logo from '../../assets/images/logoP.jpg';
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {

    return (
        <footer className="border-t bg-white flex justify-center">
            <div className="container px-4 md:px-6 py-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-4">
                        <img
                            src={logo}
                            alt="Fresh Styling Logo"
                            width={150}
                            height={150}
                        />
                        <p className="text-gray-500">
                            Barbería moderna que provee los servicios profesionales de cuidados personales para caballero
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-black">Links</h3>
                        <nav className="flex flex-col space-y-2">
                            <a href="#services" className="text-gray-500 hover:text-barber-blue">
                                Servicios
                            </a>
                            <a href="#gallery" className="text-gray-500 hover:text-barber-blue">
                                Trabajos
                            </a>
                            <a href="#booking" className="text-gray-500 hover:text-barber-blue">
                                Agenda Ahora!
                            </a>
                            <a href="#contact" className="text-gray-500 hover:text-barber-blue">
                                Contacto
                            </a>
                        </nav>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-black">Síguenos En Nuestras Redes</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-barber-blue">
                                <Facebook className="h-6 w-6" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-barber-blue">
                                <Instagram className="h-6 w-6" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-barber-blue">
                                <Twitter className="h-6 w-6" />
                                <span className="sr-only">Twitter</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Fresh Styling. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );

}

export default Footer;