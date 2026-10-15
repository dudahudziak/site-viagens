import type { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const links = [
  { href: '/', label: 'Início' },
  { href: '/destinos', label: 'Destinos' },
];

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useRouter();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            Rota Livre
          </Link>
          <nav aria-label="Navegação principal">
            <ul className={styles.nav}>
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={pathname === href ? styles.active : styles.link}
                    aria-current={pathname === href ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Rota Livre · Portal de viagens</p>
      </footer>
    </div>
  );
}
