import './ContactMethods.css';
import { BsTelephone, BsEnvelope, BsGeoAlt } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

export default function ContactMethods() {
  return (
    <section className="contact-methods">
      <div className="contact-grid">
        <div className="contact-card">
          <BsTelephone className="contact-icon" />
          <h3>اتصل بنا فوراً</h3>
          <p>الخط الرئيسي: <strong>+90 212 555 0123</strong></p>
          <p>الخط المباشر: <strong>+90 212 555 0124</strong></p>
          <p>الطوارئ 24/7: <strong>+90 535 123 4567</strong></p>
          <Button variant="warning" size="sm" className="mt-3">
            <BsTelephone className="me-2" />
            اتصل الآن
          </Button>
        </div>

        <div className="contact-card">
          <BsEnvelope className="contact-icon" />
          <h3>راسلنا إلكترونياً</h3>
          <p>البريد الرئيسي: <strong>info@legalservices.com</strong></p>
          <p>للاستشارات: <strong>consultation@legalservices.com</strong></p>
          <p>للترجمة: <strong>translation@legalservices.com</strong></p>
          <Button variant="primary" size="sm" className="mt-3">
            <BsEnvelope className="me-2" />
            أرسل إيميل
          </Button>
        </div>

        <div className="contact-card">
          <BsGeoAlt className="contact-icon" />
          <h3>زورنا في المكتب</h3>
          <p>شارع الاستقلال رقم 123<br />
            الطابق الخامس، مكتب 15<br />
            بيوغلو، إسطنبول 34433 - تركيا
          </p>
          <Button variant="danger" size="sm" className="mt-3">
            <BsGeoAlt className="me-2" />
            اعرض على الخريطة
          </Button>
        </div>
      </div>
    </section>
  );
}
