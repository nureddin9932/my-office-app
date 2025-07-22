import './WhyUsSection.css';
import { BsCheckCircle, BsStarFill } from 'react-icons/bs';

export default function WhyUsSection() {
  return (
    <section className="whyus">
      <div className="whyus-container">
        <div className="whyus-content">
          <h2>لماذا تختارنا؟</h2>
          <p>تميز بخبرة واسعة وفريق متخصص يضمن تقديم أفضل الخدمات القانونية وخدمات الترجمة بأعلى مستويات الجودة والاحترافية.</p>

          <ul className="whyus-list">
            <li><BsCheckCircle /> فريق من الخبراء المعتمدين</li>
            <li><BsCheckCircle /> سرعة في الإنجاز</li>
            <li><BsCheckCircle /> أسعار تنافسية</li>
            <li><BsCheckCircle /> دعم مستمر</li>
          </ul>

          <button className="whyus-btn">تعرف علينا أكثر →</button>
        </div>

        <div className="whyus-card">
          <BsStarFill className="whyus-star" />
          <h3>تقييم عملائنا</h3>
          <div className="stars">
            {[...Array(5)].map((_, i) => <BsStarFill key={i} />)}
          </div>
          <p className="rate">4.9 من 5 نجوم</p>

          <div className="reviews">
            <p>"خدمة ممتازة وسرعة في الإنجاز. أنصح بشدة!" <span>- أحمد محمد</span></p>
            <p>"فريق محترف وترجمة دقيقة جداً." <span>- فاطمة علي</span></p>
            <p>"أفضل مكتب قانوني تعاملت معه." <span>- محمد يوسف</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
