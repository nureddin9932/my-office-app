import './PricingCards.css';

export default function PricingCards() {
  return (
    <section className="pricing-cards">
      <div className="card basic">
        <h4>الباقة الأساسية</h4>
        <h3>الاستشارة البسيطة</h3>
        <p className="price">$150</p>
        <ul>
          <li>استشارة قانونية (ساعة واحدة)</li>
          <li>مراجعة وثيقة واحدة</li>
          <li>نصائح قانونية مكتوبة</li>
          <li>دعم عبر الهاتف لمدة أسبوع</li>
        </ul>
        <hr />
        <ul>
          <li>رد خلال 24 ساعة</li>
          <li>ضمان الجودة</li>
        </ul>
        <button className="btn primary">اختر هذه الباقة</button>
      </div>

      <div className="card popular">
        <span className="badge">الأكثر طلباً</span>
        <h4>الباقة المتقدمة</h4>
        <h3>الخدمة الشاملة</h3>
        <p className="price">
          $350 <span className="old-price">$450</span>
        </p>
        <ul>
          <li>ساعات استشارة قانونية شاملة 3</li>
          <li>ترجمة 5 وثائق معتمدة</li>
          <li>تصديق من الجهات المختصة</li>
          <li>متابعة الإجراءات لمدة شهر</li>
          <li>تقرير قانوني مفصل</li>
          <li>دعم أولوي عبر WhatsApp</li>
        </ul>
        <hr />
        <ul>
          <li>رد خلال 6 ساعات</li>
          <li>خدمة مميزة</li>
        </ul>
        <button className="btn yellow">اختر هذه الباقة</button>
      </div>

      <div className="card pro">
        <h4>الباقة المؤسسية</h4>
        <h3>للشركات والمؤسسات</h3>
        <p className="price">$750</p>
        <ul>
          <li>استشارات قانونية غير محدودة</li>
          <li>ترجمة وثائق غير محدودة</li>
          <li>متابعة دائمة للقضايا</li>
          <li>محامي مخصص للشركة</li>
          <li>تدريب الفرق القانونية</li>
          <li>دعم في 24/7</li>
        </ul>
        <hr />
        <ul>
          <li>خط مباشر مع المحامي</li>
          <li>حماية قانونية شاملة</li>
        </ul>
        <button className="btn orange">اختر هذه الباقة</button>
      </div>
    </section>
  );
}
