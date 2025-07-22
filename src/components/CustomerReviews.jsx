import './CustomerReviews.css';

export default function CustomerReviews() {
  const reviews = [
    {
      name: 'أحمد محمد',
      text: 'خدمة ممتازة، سرعة في الإنجاز واحترافية عالية.',
      img: 'https://i.pravatar.cc/100?img=12',
    },
    {
      name: 'فاطمة علي',
      text: 'تعامل راقٍ جداً وفريق دعم مميز. أنصح بهم بشدة!',
      img: 'https://i.pravatar.cc/100?img=47',
    },
    {
      name: 'محمد يوسف',
      text: 'أفضل مكتب قانوني تعاملت معه، شكراً لكم.',
      img: 'https://i.pravatar.cc/100?img=33',
    },
  ];

  return (
    <section className="reviews">
      <h2 className="reviews-title">ماذا يقول عملاؤنا؟</h2>
      <div className="reviews-cards">
        {reviews.map((rev, index) => (
          <div key={index} className="review-card">
            <img src={rev.img} alt={rev.name} className="review-avatar" />
            <span className="review-author">{rev.name}</span>
            <p className="review-text">“{rev.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}
