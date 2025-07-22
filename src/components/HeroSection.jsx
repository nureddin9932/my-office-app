import './HeroSection.css';
import { useEffect, useState } from 'react';
import { BsPeopleFill, BsAwardFill, BsLightningFill, BsHeadset } from 'react-icons/bs';

const typingTexts = [
  'خدمات قانونية موثوقة',
  'استشارات احترافية',
  'ترجمة معتمدة للوثائق',
];

export default function HeroSection() {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < typingTexts[textIndex].length) {
        setCurrentText((prev) => prev + typingTexts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentText('');
          setCharIndex(0);
          setTextIndex((prev) => (prev + 1) % typingTexts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [charIndex, textIndex]);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            <span className="typed-text">{currentText}</span>
            <span className="cursor">|</span>
          </h1>
          <p>نقدم خدمات واستشارات قانونية موثوقة مع ترجمة احترافية للوثائق والمستندات التركية بأعلى معايير الجودة والدقة.</p>
          <div className="hero-buttons">
            <button className="primary-btn">اكتشف خدماتنا</button>
            <button className="secondary-btn">احجز استشارة مجانية</button>
          </div>
        </div>

        <div className="hero-stats-card">
          <div className="stat-box"><BsPeopleFill size={24} /><h3>500+</h3><p>عملاء راضون</p></div>
          <div className="stat-box"><BsAwardFill size={24} /><h3>98%</h3><p>نسبة نجاح</p></div>
          <div className="stat-box"><BsLightningFill size={24} /><h3>15+</h3><p>سنوات خبرة</p></div>
          <div className="stat-box"><BsHeadset size={24} /><h3>24/7</h3><p>دعم مستمر</p></div>
        </div>
      </div>
    </section>
  );
}
