import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Meliora Projects - Town Planning Consultants in NSW',
  description: 'Meliora Projects is a leading town planning consultancy in NSW, providing expert development applications, planning reports, and council approval support for developers, builders, and property owners.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
