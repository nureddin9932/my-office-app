import './HowWeWork.css';

export default function HowWeWork() {
  const steps = [
    { number: '1', title: 'التواصل الأولي', desc: 'تواصل معنا لمناقشة احتياجاتك' },
    { number: '2', title: 'دراسة الحالة', desc: 'تحليل شامل للحالة وتحديد الخطة' },
    { number: '3', title: 'تنفيذ الخدمة', desc: 'تقديم الخدمة بأعلى معايير الجودة' },
    { number: '4', title: 'المتابعة', desc: 'متابعة مستمرة وتقديم الدعم' },
  ];

  return (
    <section className="how-we-work">
      <h2>كيف نعمل</h2>
      <p>عملية واضحة ومنظمة لضمان أفضل النتائج</p>
      <div className="steps">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
