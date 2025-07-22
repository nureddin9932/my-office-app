import './SpecializedServices.css';
import { BsCheck2Circle } from 'react-icons/bs';
import { FaBalanceScale, FaFileSignature, FaLanguage } from 'react-icons/fa';

export default function SpecializedServices() {
  return (
    <section className="specialized-services">
   

      <div className="cards">
        <div className="service-card">
          <div className="icon"><FaBalanceScale /></div>
          <h3>الاستشارات القانونية</h3>
          <ul>
            <li><BsCheck2Circle /> قانون الأسرة والأحوال الشخصية</li>
            <li><BsCheck2Circle /> القانون التجاري وقانون الشركات</li>
            <li><BsCheck2Circle /> قانون العقارات والممتلكات</li>
            <li><BsCheck2Circle /> قانون العمل والتوظيف</li>
            <li><BsCheck2Circle /> القانون الجنائي والمدني</li>
            <li><BsCheck2Circle /> قانون الهجرة والجنسية</li>
          </ul>
          <hr />
          <ul>
            <li><BsCheck2Circle /> استشارات فورية متاحة 24/7</li>
            <li><BsCheck2Circle /> سرية تامة وحماية البيانات</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="icon golden"><FaLanguage /></div>
          <h3>ترجمة الوثائق</h3>
          <ul>
            <li><BsCheck2Circle /> الشهادات والدبلومات الأكاديمية</li>
            <li><BsCheck2Circle /> العقود والاتفاقيات التجارية</li>
            <li><BsCheck2Circle /> الوثائق الحكومية والرسمية</li>
            <li><BsCheck2Circle /> تقارير طبية ووثائق صحية</li>
            <li><BsCheck2Circle /> براءات الاختراع والعلامة التجارية</li>
            <li><BsCheck2Circle /> كشوف الحسابات والسجلات المالية</li>
          </ul>
          <hr />
          <ul>
            <li><BsCheck2Circle /> ترجمة معتمدة ومصدقة رسمياً</li>
            <li><BsCheck2Circle /> تسليم سريع في 24-48 ساعة</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="icon orange"><FaFileSignature /></div>
          <h3>التوثيق والتصديق</h3>
          <ul>
            <li><BsCheck2Circle /> توثيق الوثائق من كاتب العدل</li>
            <li><BsCheck2Circle /> التصديق من وزارة الخارجية</li>
            <li><BsCheck2Circle /> إجراءات القنصليات والسفارات</li>
            <li><BsCheck2Circle /> تصديق الأوراق التجارية</li>
            <li><BsCheck2Circle /> تصديق الشهادات الطبية</li>
            <li><BsCheck2Circle /> المتابعة الكاملة للإجراءات</li>
          </ul>
          <hr />
          <ul>
            <li><BsCheck2Circle /> فريق متخصص في الإجراءات الرسمية</li>
            <li><BsCheck2Circle /> إنجاز سريع ومضمون</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
