import Contact from "../components/contact/Contact";
import Booking from "../components/booking/Booking";
import Gallery from "../components/gallery/Gallery";
import Introduction from "../components/introduction/Introduction";
import Services from "../components/services/Services";
import Footer from "../components/footer/Footer";

const LandingPage = () => {

    return (
        <main className="min-h-screen min-w-screen">
            <Introduction />
            <Services />
            <Gallery />
            <Booking />
            <Contact />
            <Footer />
        </main>
    );

}

export default LandingPage;