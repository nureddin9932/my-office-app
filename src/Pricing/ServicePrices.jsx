import './ServicePrices.css';

export default function ServicePrices() {
  return (
    <section className="service-prices">
      <h2>أسعار الخدمات المنفردة</h2>
      <p>يمكنك أيضاً طلب خدمات منفردة حسب احتياجاتك الخاصة</p>

      <div className="prices-grid">
        <div className="price-box">
          <h3>استشارة قانونية</h3>
          <p>$75/ساعة</p>
          <small>استشارة قانونية متخصصة لمدة ساعة واحدة</small>
        </div>
        <div className="price-box">
          <h3>ترجمة وثيقة</h3>
          <p>$25/صفحة</p>
          <small>ترجمة معتمدة لوثيقة واحدة (حتى 300 كلمة)</small>
        </div>
        <div className="price-box">
          <h3>توثيق وثيقة</h3>
          <p>$40/وثيقة</p>
          <small>توثيق وتصديق وثيقة من الجهات المختصة</small>
        </div>
        <div className="price-box">
          <h3>صياغة عقد</h3>
          <p>$200/عقد</p>
          <small>صياغة عقد قانوني محكم ومراجعته</small>
        </div>
        <div className="price-box">
          <h3>مراجعة عقد</h3>
          <p>$100/عقد</p>
          <small>مراجعة قانونية شاملة لعقد موجود</small>
        </div>
        <div className="price-box">
          <h3>متابعة إجراءات</h3>
          <p>$150/شهر</p>
          <small>متابعة دورية للإجراءات والقضايا القانونية</small>
        </div>
      </div>
    </section>
  );
}
