import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyUsSection from '../components/WhyUsSection';
import ContactSection from '../components/ContactSection';
import CustomerReviews from '../components/CustomerReviews';
import Footer from '../pages/Footer';   // ✅ استدعاء الفوتر من مجلد الصفحات

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ContactSection />
      <CustomerReviews />

      <Footer />  {/* ✅ الفوتر هنا في نهاية الصفحة */}
    </>
  );
}
