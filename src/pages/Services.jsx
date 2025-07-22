import ServicesHeader from '../Services/ServicesHeader';
import SpecializedServices from '../Services/SpecializedServices';
import HowWeWork from '../Services/HowWeWork';
import ReadyToStart from '../Services/ReadyToStart';
import CustomerReviews from '../components/CustomerReviews';
import Footer from '../pages/Footer';   // ✅ استدعاء الفوتر من مجلد الصفحات






export default function Services() {
  return (
    <>
      <ServicesHeader />
      <SpecializedServices />
      <HowWeWork />
      <ReadyToStart />
      <CustomerReviews />
      <Footer />  {/* ✅ الفوتر هنا في نهاية الصفحة */}
      
      

    </>
  );
}
