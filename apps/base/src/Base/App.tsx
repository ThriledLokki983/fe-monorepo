import { useRoutes } from 'react-router-dom';
import type { ReactElement } from 'react';
import ROUTES from '../configs/routes';

export function Core() {
    const routes = useRoutes(ROUTES);

  return <App routes={routes} />;
}

interface AppProps {
  routes: ReactElement | null;
}

/**
 * Main App component that renders routes based on props
 */
export function App({ routes }: AppProps) {
  return routes;
}

export default Core;
