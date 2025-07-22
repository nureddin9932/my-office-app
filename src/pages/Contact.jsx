import ContactHeader from '../Contact/ContactHeader';
import ContactMethods from '../Contact/ContactMethods';
import WorkHours from '../Contact/WorkHours';
import ServiceAreas from '../Contact/ServiceAreas';   // ✅ استدعاء قسم مناطق الخدمة
import Footer from '../pages/Footer';   // ✅ استدعاء الفوتر من مجلد الصفحات


export default function Contact() {
  return (
    <>
      <ContactHeader />
      <ContactMethods />
      <WorkHours />
      <ServiceAreas />   {/* ✅ مناطق الخدمة */}
      <Footer />  {/* ✅ الفوتر هنا في نهاية الصفحة */}
      
    </>
  );
}
