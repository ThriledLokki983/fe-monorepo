import { Outlet, useLocation } from 'react-router-dom';
import ROUTES, { CustomRouteObject } from '../configs/routes';
import styles from './Layout.module.scss';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const navItems = ROUTES[0].children || [];
  const isComponents = location.pathname.startsWith('/components');

  return (
    <div className={styles.layout}>
      <header className={styles.base_header}>
        <section>
          <a href="/" className={styles.base_logo}>
            <span>@base-design-system 👋</span>
          </a>
          <nav className="base-nav">
            <ul>
              {(navItems as CustomRouteObject[]).map((route) => (
                <li key={route.path}>
                  <a href={route.path}>
                    {route.label || route.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </header>

      <main className={styles.main}>
        <Outlet />
        {children}
      </main>

      <footer className={styles.base_footer} data-components={isComponents}>
        <p id="love" className="base-love base-text1">
          Carefully crafted with
          <svg
            fill="currentColor"
            stroke="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <small>--- Gideon Nimoh ---</small>
        </p>
      </footer>
    </div>
  );
}
