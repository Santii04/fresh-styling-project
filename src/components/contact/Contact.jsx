import { MapPin, Phone, Mail, Clock } from "lucide-react"

const Contact = () => {

    return (
        <section id="contact" className="py-20 bg-white flex justify-center">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#2C9E90]">Visítanos</h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Ven a nuestro local o comunícate con nosotros
                    </p>
                </div>
                <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <MapPin className="h-6 w-6 text-[#F5AA6F]" />
                        <h3 className="font-semibold text-black">Dirección</h3>
                        <p className="text-gray-500">Carrera 11, #55C - 62</p>
                        <p className="text-gray-500">Manizales, Caldas</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <Phone className="h-6 w-6 text-[#F5AA6F]" />
                        <h3 className="font-semibold text-black">Teléfono</h3>
                        <p className="text-gray-500">(+57) 333 333 3333</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <Mail className="h-6 w-6 text-[#F5AA6F]" />
                        <h3 className="font-semibold text-black">Email</h3>
                        <p className="text-gray-500">info@freshstyling.com</p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <Clock className="h-6 w-6 text-[#F5AA6F]" />
                        <h3 className="font-semibold text-black">Horario de atención</h3>
                        <p className="text-gray-500">Lunes - Sábado: 8am - 7pm</p>
                        <p className="text-gray-500">Domingo: Cerrado</p>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Contact;