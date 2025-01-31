import placeholder from '../../assets/images/placeholder.svg'
import haircut1 from '../../assets/images/haircut1.jpg'
import haircut2 from '../../assets/images/haircut2.jpg'
import haircut3 from '../../assets/images/haircut3.jpg'
import haircut4 from '../../assets/images/haircut4.jpg'
import haircut5 from '../../assets/images/haircut5.jpg'
import haircut6 from '../../assets/images/haircut6.jpg'

const Gallery = () => {

    const galleryImages = [
        haircut1, haircut2, haircut3, haircut4, haircut5, haircut6
    ]

    return (
        <section id="gallery" className="py-20 bg-gray-50 flex justify-center">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#2C9E90]">Nuestro Trabajo</h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Conoce un poco sobre nuestros últimos cortes de cabello
                    </p>
                </div>
                <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden"
                        >
                            <img
                                src={image}
                                alt={`haircut-${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}

export default Gallery;