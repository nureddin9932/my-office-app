import PricingHeader from '../Pricing/PricingHeader';
import PricingCards from '../Pricing/PricingCards';
import ServicePrices from '../Pricing/ServicePrices';
import ChoosePlan from '../Pricing/ChoosePlan';
import Footer from '../pages/Footer';   // ✅ استدعاء الفوتر من مجلد الصفحات


export default function Pricing() {
  return (
    <>
      <PricingHeader />
      <PricingCards />
      <ServicePrices />
      <ChoosePlan />   {/* ✅ لا تنسى تضيفه هنا */}
     <Footer />  {/* ✅ الفوتر هنا في نهاية الصفحة */}
      

    </>
  );
}
