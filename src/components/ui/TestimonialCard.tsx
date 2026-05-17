import StarRating from './StarRating';
import { Review } from '@/lib/reviews';

interface TestimonialCardProps {
  review: Review;
}

export default function TestimonialCard({ review }: TestimonialCardProps) {
  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #F0EDE6',
        borderRadius: '10px',
        padding: '24px',
        boxShadow: '0 2px 12px rgba(37,32,24,0.06)',
        breakInside: 'avoid',
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <StarRating rating={review.rating} size={13} />
      </div>
      <p
        className="mb-4"
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '13px',
          fontWeight: 300,
          lineHeight: 1.8,
          color: '#4A3828',
        }}
      >
        &ldquo;{review.text}&rdquo;
      </p>
      <div>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '11px',
            fontWeight: 500,
            color: '#252018',
            marginBottom: '2px',
          }}
        >
          {review.name}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '10px',
            fontWeight: 300,
            color: '#B0BAA8',
            letterSpacing: '0.05em',
          }}
        >
          {review.date} · {review.location}
        </p>
      </div>
    </div>
  );
}
