import './ServicesSection.css';
import { FaBalanceScale } from 'react-icons/fa';
import { BsTranslate, BsFileEarmarkText } from 'react-icons/bs';

export default function ServicesSection() {
  return (
    <section className="services">
      <h2 className="services-title">خدماتنا الرئيسية</h2>
      <p className="services-subtitle">نقدم مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية جميع احتياجاتكم</p>

      <div className="services-cards">
        <div className="service-card">
          <div className="icon-box golden">
            <FaBalanceScale size={32} />
          </div>
          <h3>الاستشارات القانونية</h3>
          <p>استشارات قانونية متخصصة في جميع المجالات مع فريق من المحامين المعتمدين</p>
          <button className="btn primary">اعرف المزيد →</button>
        </div>

        <div className="service-card">
          <div className="icon-box yellow">
            <BsTranslate size={32} />
          </div>
          <h3>ترجمة الوثائق</h3>
          <p>ترجمة معتمدة ودقيقة لجميع أنواع الوثائق إلى اللغة التركية</p>
          <button className="btn yellow">اعرف المزيد →</button>
        </div>

        <div className="service-card">
          <div className="icon-box orange">
            <BsFileEarmarkText size={32} />
          </div>
          <h3>التوثيق والتصديق</h3>
          <p>خدمات التوثيق والتصديق الرسمي للوثائق من الجهات المختصة</p>
          <button className="btn orange">اعرف المزيد →</button>
        </div>
      </div>

      <div className="services-footer">
        <button className="btn yellow wide">عرض جميع الخدمات</button>
      </div>
    </section>
  );
}
