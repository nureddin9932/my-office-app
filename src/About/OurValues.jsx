// OurValues.jsx
import { FaBalanceScale } from 'react-icons/fa';
import { BsAward, BsPeopleFill, BsHeart } from 'react-icons/bs';
import './OurValues.css';

export default function OurValues() {
  return (
    <section className="our-values-section">
      <h2 className="values-title">قيمنا الأساسية</h2>
      <p className="values-subtitle">
        القيم التي توجه عملنا وتحدد طريقة تعاملنا مع عملائنا وشركائنا
      </p>

      <div className="values-grid">
        <div className="value-card">
          <FaBalanceScale className="value-icon" />
          <h3>النزاهة</h3>
          <p>نلتزم بأعلى معايير الأخلاق المهنية والشفافية في جميع تعاملاتنا</p>
        </div>

        <div className="value-card">
          <BsAward className="value-icon" />
          <h3>التميّز</h3>
          <p>نسعى دائمًا لتحقيق أعلى مستويات الجودة والاتقان في خدماتنا</p>
        </div>

        <div className="value-card">
          <BsPeopleFill className="value-icon" />
          <h3>العمل الجماعي</h3>
          <p>نؤمن بقوة الفريق والتعاون لتحقيق أفضل النتائج لعملائنا</p>
        </div>

        <div className="value-card">
          <BsHeart className="value-icon" />
          <h3>الاهتمام بالعميل</h3>
          <p>عملاؤنا في المقدمة دائماً، ونسعى لتجاوز توقعاتهم في كل مرة</p>
        </div>
      </div>
    </section>
  );
}
