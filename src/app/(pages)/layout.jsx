import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function PagesLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
