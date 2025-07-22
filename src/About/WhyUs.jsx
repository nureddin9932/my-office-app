import { BsCheckCircle } from 'react-icons/bs';
import './WhyUs.css';

export default function WhyUs() {
  return (
    <section className="why-us">
      <h2 className="why-title">لماذا تختارنا؟</h2>
      <p className="why-subtitle">
        الأسباب التي تجعلنا الخيار الأول للعملاء في مجال الخدمات القانونية
      </p>

      <div className="why-grid">
        <div className="why-card">
          <BsCheckCircle className="why-icon" />
          <h3>خبرة واسعة ومتنوعة</h3>
          <p>أكثر من 15 عاماً من الخبرة في مختلف المجالات القانونية</p>
        </div>

        <div className="why-card">
          <BsCheckCircle className="why-icon" />
          <h3>فريق متخصص ومعتمد</h3>
          <p>محامون ومترجمون معتمدون من الجهات الرسمية</p>
        </div>

        <div className="why-card">
          <BsCheckCircle className="why-icon" />
          <h3>التزام بالمواعيد</h3>
          <p>سرعة في الإنجاز والالتزام الدقيق بالمواعيد المحددة</p>
        </div>

        <div className="why-card">
          <BsCheckCircle className="why-icon" />
          <h3>شفافية في الأسعار</h3>
          <p>أسعار واضحة وشفافة بدون تكاليف خفية</p>
        </div>

        <div className="why-card">
          <BsCheckCircle className="why-icon" />
          <h3>خدمة عملاء متميزة</h3>
          <p>دعم مستمر ومتابعة دورية لجميع العملاء</p>
        </div>

        <div className="why-card">
          <BsCheckCircle className="why-icon" />
          <h3>سرية تامة</h3>
          <p>حماية كاملة لبيانات العملاء وسرية المعلومات</p>
        </div>
      </div>
    </section>
  );
}
