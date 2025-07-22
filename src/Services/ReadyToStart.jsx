import './ReadyToStart.css';

export default function ReadyToStart() {
  return (
    <section className="ready-to-start">
      <h2>هل أنت مستعد للبدء؟</h2>
      <p>
        تواصل معنا اليوم للحصول على استشارة مجانية وتحديد أفضل الحلول القانونية لاحتياجاتك
      </p>
      <div className="ready-buttons">
        <button className="primary-btn">احجز استشارة مجانية →</button>
        <button className="secondary-btn">اطلع على الأسعار</button>
      </div>
    </section>
  );
}
