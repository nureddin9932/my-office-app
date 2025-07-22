import './GetStarted.css';
import { BsGraphUpArrow, BsShieldFillCheck, BsStarFill } from 'react-icons/bs';

export default function GetStarted() {
  return (
    <section className="get-started">
      <h2 className="section-title">ابدأ رحلتك القانونية معنا</h2>
      <p className="section-subtitle">انضم إلى أكثر من 500 عميل راضٍ واحصل على الحلول القانونية التي تحتاجها</p>

      <div className="get-cards">
        <div className="get-card">
          <BsGraphUpArrow className="get-icon" />
          <h3>نمو مستمر</h3>
          <p>نساعدك في تحقيق أهدافك وتطوير أعمالك بحلول قانونية مدروسة</p>
        </div>

        <div className="get-card">
          <BsShieldFillCheck className="get-icon orange" />
          <h3>حماية شاملة</h3>
          <p>نوفر الحماية القانونية الكاملة لحقوقك ومصالحك في جميع المجالات</p>
        </div>

        <div className="get-card">
          <BsStarFill className="get-icon" />
          <h3>تميّز مضمون</h3>
          <p>خدمة استثنائية ونتائج مضمونة مع فريق من أفضل الخبراء</p>
        </div>
      </div>

      <div className="get-actions">
        <button className="btn yellow">ابدأ الآن →</button>
        <button className="btn orange">اكتشف خدماتنا</button>
      </div>
    </section>
  );
}
