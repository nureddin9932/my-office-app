import AboutHeader from '../About/AboutHeader';
import OurStory from '../About/OurStory';
import VisionMission from '../About/VisionMission';
import OurValues from '../About/OurValues';
import WhyUs from '../About/WhyUs';
import GetStarted from '../About/GetStarted';  // ✅ استدعاء القسم الجديد
import Footer from '../pages/Footer';   // ✅ استدعاء الفوتر من مجلد الصفحات

export default function About() {
  return (
    <>
      <AboutHeader />
      <OurStory />
      <VisionMission />
      <OurValues />
      <WhyUs />
      <GetStarted />   {/* ✅ قسم ابدأ رحلتك القانونية معنا */}
      <Footer />  {/* ✅ الفوتر هنا في نهاية الصفحة */}
      
    </>
  );
}
