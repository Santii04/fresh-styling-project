import logo from '../../assets/images/logoP.jpg'

const Introduction = () => {
    return (
        <section className="relative bg-[#2C9E90] py-20 md:py-32 flex justify-center">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] place-items-center">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                                Bienvenido a Fresh Styling
                            </h1>
                            <p className="max-w-[600px] text-white md:text-xl">
                                Donde trabajamos constantemente para que mantengas tu mejor versión
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <button className="bg-[#E0A165] hover:bg-[#E0A165]/90 text-white">
                                <a href="#booking">Agendar ahora!</a>
                            </button>
                            <button variant="outline" className="text-black border-white bg-white hover:bg-white/90 hover:text-[#2C9E90]">
                                <a href="#services">Ver servicios</a>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src={logo}
                            alt="Fresh Styling Logo"
                            className="rounded-lg w-auto h-100 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction;