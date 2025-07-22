import './VisionMission.css';
import { BsBullseye, BsHeartFill } from 'react-icons/bs';

export default function VisionMission() {
  return (
    <section className="vision-mission">
      <div className="vm-card">
        <div className="icon golden">
          <BsBullseye size={32} />
        </div>
        <h3>رؤيتنا</h3>
        <p>
          أن نكون المرجع الأول والأكثر ثقة في تقديم الخدمات القانونية وخدمات الترجمة في المنطقة، 
          ونساهم في بناء مجتمع يحكمه القانون والعدالة من خلال تقديم خدمات قانونية متميزة وحلول مبتكرة تلبي احتياجات عملائنا.
        </p>
      </div>

      <div className="vm-card highlighted">
        <div className="icon orange">
          <BsHeartFill size={32} />
        </div>
        <h3>مهمتنا</h3>
        <p>
          تقديم خدمات قانونية معتمدة وترجمة معتمدة بأعلى معايير الجودة والمهنية، مع الالتزام بالشفافية 
          والنزاهة في جميع تعاملاتنا، نسعى لحماية حقوق عملائنا وتحقيق أهدافهم القانونية من خلال فريق متخصص وخبرة واسعة في المجال.
        </p>
      </div>
    </section>
  );
}
