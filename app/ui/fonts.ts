// Font being use 'Inter'
import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

// Subset 'latin'
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({weight: ['400', '700'], subsets: ['latin'] });