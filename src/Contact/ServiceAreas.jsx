import { BsGlobe } from "react-icons/bs";
import './ServiceAreas.css';

export default function ServiceAreas() {
  return (
    <section className="service-areas">
      <h2 className="section-title">مناطق الخدمة</h2>
      <p className="section-subtitle">نخدم العملاء في جميع أنحاء تركيا وخارجها</p>

      <div className="areas-grid">
        <div className="area-card">
          <BsGlobe className="area-icon" />
          <span className="badge main">إسطنبول</span>
          <p>المكتب الرئيسي</p>
        </div>

        <div className="area-card">
          <BsGlobe className="area-icon" />
          <span className="badge main">أنقرة</span>
          <p>فرع رئيسي</p>
        </div>

        <div className="area-card">
          <BsGlobe className="area-icon" />
          <span className="badge special">إزمير</span>
          <p>فرع متخصص</p>
        </div>

        <div className="area-card">
          <BsGlobe className="area-icon" />
          <span className="badge main">عبر الإنترنت</span>
          <p>جميع المدن</p>
        </div>
      </div>
    </section>
  );
}
