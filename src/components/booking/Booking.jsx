const Booking = () => {

    const services = [
        "Corte de cabello",
        "Corte de cabello y asesoramiento",
        "Arreglo de barba",
        "Corte de cabello y arreglo de barba",
        "Limpieza facial",
        "Arreglo de barba y limpieza facial"
    ];

    const times = [
        "8:00 AM",
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 M",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM"
    ]

    return (
        <section id="booking" className="py-20 bg-[#2C9E90] flex justify-center">
            <div className="container px-4 md:px-6 ">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Agenda Tu Visita</h2>
                    <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Escoge tu servicio preferido y el momento que más te convenga
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto bg-white p-10 rounded-lg">
                    <div className="">
                        <h3 className="text-black font-bold text-xl">Agendar una Cita</h3>
                        <p className="text-gray-500 mt-2">Selecciona un servicio y un día de la agenda</p>
                    </div>
                    <div>
                        <form className="space-y-4 mt-6">
                            <div className="space-y-2">
                                <label className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Servicio
                                </label>
                                <select className="flex h-10 w-full text-black rounded-md border border-input border-gray-400 bg-background px-3 py-2 text-sm ring-offset-background transition">
                                    {services.map((service, index) => {
                                        return <option id={index}>{service}</option>
                                    })}

                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Fecha
                                </label>
                                <input
                                    type="date"
                                    className="flex h-10 w-full text-black rounded-md border border-input border-gray-400 bg-background px-3 py-2 text-sm ring-offset-background"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Hora
                                </label>
                                <select className="flex h-10 w-full text-black rounded-md border border-input border-gray-400 bg-background px-3 py-2 text-sm ring-offset-background">
                                    {times.map((time, index) => {
                                        return <option id={index}>{time}</option>
                                    })}
                                </select>
                            </div>
                            <button className="w-full bg-[#E0A165] hover:bg-[#E0A165]/90 mt-10">Agenda Ahora!</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Booking;