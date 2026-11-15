import Image from 'next/image';
import styles from './page.module.css';

export default function Page() {
  return (
    <main className={styles.page}>
      <Image src="/logo.svg" alt="Tinker UI" width={64} height={64} priority />
      <h1>Tinker UI</h1>
      <p>Component documentation.</p>
    </main>
  );
}
