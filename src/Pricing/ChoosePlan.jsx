import './ChoosePlan.css';

export default function ChoosePlan() {
  return (
    <section className="choose-plan">
      <h2 className="choose-title">اختر الباقة الأنسب لك اليوم</h2>
      <p className="choose-subtitle">
        احصل على استشارة مجانية لمدة 15 دقيقة لتحديد الباقة الأنسب لاحتياجاتك
      </p>

      <div className="choose-buttons">
        <button className="btn yellow">احجز استشارة مجانية →</button>
        <button className="btn red">📞 اتصل بنا: +90 212 555 0123</button>
      </div>
    </section>
  );
}
