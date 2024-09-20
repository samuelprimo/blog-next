import Link from 'next/link';
import Header from '@/components/header';

export default function Home() {
  return (
    <main>
      <Header />
      <p> acrescente /blog ao lado do localhost</p>
      <p><Link href="/about">what is this?</Link></p>
    </main>
  );
}


