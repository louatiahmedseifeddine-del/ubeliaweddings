interface StarRatingProps {
  rating?: number;
  size?: number;
  color?: string;
}

export default function StarRating({ rating = 5, size = 14, color = '#B59354' }: StarRatingProps) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1l1.6 3.3 3.6.5-2.6 2.6.6 3.6L7 9.3l-3.2 1.7.6-3.6L1.8 4.8l3.6-.5L7 1z"
            fill={i < Math.round(rating) ? color : 'none'}
            stroke={color}
            strokeWidth="1"
          />
        </svg>
      ))}
    </span>
  );
}
