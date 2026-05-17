export interface Review {
  id: number;
  name: string;
  location: string;
  date: string;
  rating: number;
  text: string;
  product?: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Camille D.',
    location: 'Lyon, France',
    date: 'Married July 2025',
    rating: 5,
    text: 'I had 23 browser tabs open and wasn\'t sleeping. The Ubelia System saved me. The pre-filled timeline gave me back control in one evening.',
    product: 'bundle',
  },
  {
    id: 2,
    name: 'Sophie M.',
    location: 'Paris, France',
    date: 'Married June 2025',
    rating: 5,
    text: 'The budget tracker is a revelation. I caught an $800 overrun before signing anything. Absolutely essential.',
    product: 'spreadsheet',
  },
  {
    id: 3,
    name: 'Amélie R.',
    location: 'Bordeaux, France',
    date: 'Married September 2025',
    rating: 5,
    text: 'My fiancé FINALLY got involved in planning thanks to the delegation pages. We planned our wedding together for the first time.',
    product: 'ebook',
  },
  {
    id: 4,
    name: 'Marie-Lou T.',
    location: 'Marseille, France',
    date: 'Married August 2025',
    rating: 5,
    text: 'The vendor email scripts are gold. I got 7 quotes in 3 days without doing a single venue tour.',
    product: 'ebook',
  },
  {
    id: 5,
    name: 'Inès B.',
    location: 'Toulouse, France',
    date: 'Married May 2025',
    rating: 5,
    text: 'Married in 5 months. The condensed 6-month version saved me from total panic. I knew exactly what to do each week.',
    product: 'ebook',
  },
  {
    id: 6,
    name: 'Pauline H.',
    location: 'Nantes, France',
    date: 'Married October 2025',
    rating: 5,
    text: 'I hate spreadsheets. This is simple, clear, and works perfectly on my phone. I managed everything from my couch.',
    product: 'spreadsheet',
  },
  {
    id: 7,
    name: 'Juliette F.',
    location: 'Rennes, France',
    date: 'Married July 2025',
    rating: 5,
    text: 'The "what to skip" guide freed me. We had the wedding WE wanted, not the Pinterest version.',
    product: 'ebook',
  },
  {
    id: 8,
    name: 'Claire N.',
    location: 'Strasbourg, France',
    date: 'Married November 2025',
    rating: 5,
    text: 'The vow frameworks saved me hours of writer\'s block. I adapted them in 20 minutes and they were real, emotional, ours.',
    product: 'ebook',
  },
  {
    id: 9,
    name: 'Léa V.',
    location: 'Nice, France',
    date: 'Married June 2025',
    rating: 5,
    text: 'Bought the Complete Pack. The spreadsheet alone is worth triple the price. Incredible level of detail.',
    product: 'bundle',
  },
  {
    id: 10,
    name: 'Charlotte B.',
    location: 'Montpellier, France',
    date: 'Married August 2025',
    rating: 5,
    text: 'The payment tracker saved me from missing two deposits. Without it I might have lost my venue.',
    product: 'spreadsheet',
  },
  {
    id: 11,
    name: 'Marine P.',
    location: 'Lille, France',
    date: 'Married September 2025',
    rating: 5,
    text: 'Simple. Clear. Visually beautiful. You can feel it was made by someone who genuinely understands engaged couples.',
    product: 'bundle',
  },
  {
    id: 12,
    name: 'Aurélie D.',
    location: 'Grenoble, France',
    date: 'Married October 2025',
    rating: 5,
    text: '200% satisfied. Sent it to my 4 engaged friends immediately.',
    product: 'bundle',
  },
];

export function getReviewsByProduct(productId: string): Review[] {
  return reviews.filter((r) => r.product === productId).slice(0, 3);
}
