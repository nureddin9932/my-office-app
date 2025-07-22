import './Footer.css';
import { useState } from 'react';
import { BsTelephone, BsEnvelope, BsGeoAlt } from 'react-icons/bs';

export default function Footer() {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (index) => {
    setActiveLink(index);
  };

  const linksGroup1 = [
    { label: 'الاستشارات القانونية', link: '#services' },
    { label: 'ترجمة الوثائق', link: '#translation' },
    { label: 'التوثيق والتصديق', link: '#certification' },
    { label: 'متابعة الإجراءات', link: '#follow-up' },
  ];

  const linksGroup2 = [
    { label: 'من نحن', link: '#about' },
    { label: 'خدماتنا', link: '#services' },
    { label: 'الأسعار', link: '#pricing' },
    { label: 'اتصل بنا', link: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">⚖️ مكتب الخدمات القانونية</h3>
          <p className="footer-text">
            مؤسسة رائدة في تقديم الخدمات القانونية والترجمة المعتمدة مع خبرة تزيد عن 15 عاماً في خدمة العملاء.
          </p>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">خدماتنا</h4>
          <ul className="footer-links">
            {linksGroup1.map((item, index) => (
              <li
                key={index}
                onClick={() => handleClick(`g1-${index}`)}
                className={activeLink === `g1-${index}` ? 'active-link' : ''}
              >
                <a href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">روابط مفيدة</h4>
          <ul className="footer-links">
            {linksGroup2.map((item, index) => (
              <li
                key={index}
                onClick={() => handleClick(`g2-${index}`)}
                className={activeLink === `g2-${index}` ? 'active-link' : ''}
              >
                <a href={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">معلومات التواصل</h4>
          <ul className="footer-links">
            <li><BsTelephone /> +90 212 555 0123</li>
            <li><BsEnvelope /> info@legalservices.com</li>
            <li><BsGeoAlt /> شارع الاستقلال 123، بيوغلو، إسطنبول</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2024 مكتب الخدمات القانونية. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
