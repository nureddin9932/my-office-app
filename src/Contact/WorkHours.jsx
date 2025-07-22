import { BsClockHistory, BsCheckCircle } from 'react-icons/bs';
import './WorkHours.css';

export default function WorkHours() {
  return (
    <section className="work-hours-section">
      <h2 className="work-hours-title">ساعات العمل</h2>
      <p className="work-hours-subtitle">نحن متاحون لخدمتكم في الأوقات التالية</p>

      <div className="work-hours-content">
        <div className="hours-list">
          <div><strong>الاثنين - الخميس:</strong> 18:00 - 9:00</div>
          <div><strong>الجمعة:</strong> 17:00 - 9:00</div>
          <div><strong>السبت:</strong> 15:00 - 10:00</div>
          <div><strong>الأحد:</strong> <span className="closed">مغلق</span></div>
        </div>

        <div className="emergency-box">
          <BsClockHistory className="emergency-icon" />
          <h3>خدمة الطوارئ</h3>
          <p>متاحة على مدار الساعة</p>
          <div className="badge-24"><BsCheckCircle /> 24/7</div>
        </div>
      </div>
    </section>
  );
}
