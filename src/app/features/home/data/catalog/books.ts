import { IMAGES } from '../../../../core/constants/image-assets';
import { Product } from '../../../../models/product.model';

const I = IMAGES.products;

export const BOOKS: Product[] = [
  { id: 'book-beyond-the-horizon', category: 'books', brand: 'A. Rao', name: 'Beyond the Horizon (Novel, Paperback)', description: 'An adventure of courage across the Himalayas.', image: I.novel, bg: '#eceff1', price: 249, mrp: 399, rating: 4.4, ratingCount: 5210, keywords: ['book', 'novel', 'fiction', 'paperback'] },
  { id: 'book-mastering-web-development', category: 'books', brand: 'S. Kumar', name: 'Mastering Web Development (Paperback)', description: 'HTML, CSS, JavaScript and Angular step by step.', image: I.webDevelopment, bg: '#e8f0fb', price: 449, mrp: 699, rating: 4.5, ratingCount: 3120, tag: 'BESTSELLER', keywords: ['book', 'programming', 'coding', 'web', 'technology', 'paperback'] },
  { id: 'book-indian-cooking-made-easy', category: 'books', brand: 'M. Iyer', name: 'Indian Cooking Made Easy (Hardcover)', description: '120 everyday recipes with photos.', image: I.indianCooking, bg: '#fdeee2', price: 399, mrp: 599, rating: 4.3, ratingCount: 2480, keywords: ['book', 'cookbook', 'recipes', 'cooking', 'hardcover'] },
  { id: 'book-a-brief-history-of-india', category: 'books', brand: 'R. Sen', name: 'A Brief History of India (Paperback)', description: 'From ancient civilisations to modern India.', image: I.historyOfIndia, bg: '#f1e9f6', price: 299, mrp: 499, rating: 4.2, ratingCount: 1890, keywords: ['book', 'history', 'non fiction', 'paperback'] },
  { id: 'book-smart-money-habits', category: 'books', brand: 'P. Nair', name: 'Smart Money Habits (Paperback)', description: 'Simple ideas for saving and investing.', image: I.moneyHabits, bg: '#e8f4e9', price: 279, mrp: 450, rating: 4.4, ratingCount: 7340, tag: 'TRENDING', keywords: ['book', 'finance', 'money', 'self help', 'paperback'] },
  { id: 'book-bedtime-story-collection', category: 'books', brand: 'Little Owl', name: 'Bedtime Story Collection for Kids', description: '25 illustrated short stories, ages 3-8.', image: I.kidsStories, bg: '#e3f4f6', price: 199, mrp: 350, rating: 4.6, ratingCount: 9120, keywords: ['book', 'kids', 'children', 'stories', 'storybook'] },
];
