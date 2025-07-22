import './ContactSection.css';
import { BsTelephoneFill, BsEnvelopeFill, BsGeoAltFill } from 'react-icons/bs';

export default function ContactSection() {
  return (
    <section className="contact-section">
      <h2>هل تحتاج مساعدة فورية؟</h2>
      <p>تواصل معنا الآن للحصول على استشارة مجانية أو لمعرفة المزيد عن خدماتنا</p>

      <div className="contact-cards">
        <div className="contact-card">
          <BsTelephoneFill size={28} />
          <h3>اتصل بنا</h3>
          <p>+90 212 555 0123</p>
        </div>

        <div className="contact-card">
          <BsEnvelopeFill size={28} />
          <h3>راسلنا</h3>
          <p>info@legalservices.com</p>
        </div>

        <div className="contact-card">
          <BsGeoAltFill size={28} />
          <h3>زورنا</h3>
          <p>شارع الاستقلال، إسطنبول</p>
        </div>
      </div>

      <div className="contact-actions">
        <button className="btn yellow">احجز موعد استشارة →</button>
        <button className="btn orange">اطلع على الأسعار →</button>
      </div>
    </section>
  );
}
