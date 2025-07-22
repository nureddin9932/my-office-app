import './OurStory.css';
import { BsPeopleFill, BsClockFill, BsStarFill, BsGlobe } from 'react-icons/bs';

export default function OurStory() {
  return (
    <section className="our-story">
      <div className="story-content">
        <h2>قصتنا</h2>
        <p>
          بدأت مؤسسة "مكتب الخدمات القانونية" في عام 2009 كروية لتقديم خدمات قانونية متميزة وموثوقة للمجتمع العربي في تركيا. منذ ذلك الحين، نمونا لنصبح واحدة من أبرز المؤسسات القانونية المتخصصة في المنطقة.
        </p>
        <p>
          نحن نؤمن بأن كل عميل يستحق أفضل مستوى من الخدمة القانونية، ولذلك نلتزم بتقديم حلول قانونية مبتكرة ومتطورة تلبي احتياجات عملائنا المتنوعة بأعلى مستويات المهنية والدقة.
        </p>
        <p>
          اليوم، نفخر بخدمة أكثر من 500 عميل راضٍ ونواصل التزامنا بالتميز والابتكار في مجال الخدمات القانونية وخدمات الترجمة المعتمدة.
        </p>
        <button className="btn yellow">تواصل معنا →</button>
      </div>

      <div className="story-stats">
        <div className="stat-box">
          <BsPeopleFill size={24} />
          <h3>500+</h3>
          <p>عميل راضٍ</p>
        </div>
        <div className="stat-box">
          <BsClockFill size={24} />
          <h3>15+</h3>
          <p>سنة خبرة</p>
        </div>
        <div className="stat-box">
          <BsStarFill size={24} className="highlight" />
          <h3>98%</h3>
          <p>نسبة نجاح</p>
        </div>
        <div className="stat-box">
          <BsGlobe size={24} />
          <h3>10+</h3>
          <p>دولة نخدمها</p>
        </div>
      </div>
    </section>
  );
}
