import { Scissors, SprayCanIcon as Spray, Clock } from "lucide-react"

const Services = () => {

    const services = [
        {
            icon: <Scissors className="h-6 w-6" />,
            title: "Corte de cabello y Asesoría",
            description: "Estilos modernos y el mejor acompañamiento para que mantengas una gran imagen",
            price: "Desde $19.900",
        },
        {
            icon: <Spray className="h-6 w-6" />,
            title: "Arreglo de barba",
            description: "Mantén de la mejor manera tu barba con nuestros profesionales",
            price: "Desde $14.900",
        },
        {
            icon: <Clock className="h-6 w-6" />,
            title: "Limpieza facial",
            description: "Cuida tu rostro y mantenlo saludable con la ayuda de nuestros profesionales",
            price: "Desde $12.900",
        },
    ]

    return (
        <section id="services" className="py-20 bg-white flex justify-center">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#2C9E90]">Nuestros Servicios</h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Servicios profesionales de cuidados personales para caballeros modernos
                    </p>
                </div>
                <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div key={index} className="border-2 border-[#2C9E90]/10 p-10 rounded-lg">
                            <div>
                                <div className="p-2 w-12 h-12 rounded-lg bg-[#2C9E90]/10 text-[#2C9E90] mb-4 flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <h3 className="text-black font-bold text-2xl">{service.title}</h3>
                                <p className="text-[#BABABF] my-2">{service.description}</p>
                            </div>
                            <div className="my-8">
                                <p className="text-2xl font-bold text-[#E0A165]">{service.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}

export default Services;