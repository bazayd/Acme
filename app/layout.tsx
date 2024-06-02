import '@/app/ui/global.css'
// Import inter from fonts.ts
import { inter } from '@/app/ui/fonts'


// This is a Root Layout (Required) and Any UI added to this root layout will be applied to the other pages in the application.
// You can use this to add anything to html tag or body tag or even add metadata
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
