import { type ReactNode } from 'react';
import { type RouteObject } from 'react-router-dom';

import * as PATH from './paths';
import * as Pages from '../pages';
import { Layout } from '../Base/Layout';

export type CustomRouteObject = RouteObject & {
  label?: string;
  isNav?: boolean;
  isEnd?: boolean;
  isIndex?: boolean;
  title: string;
  icon?: ReactNode;
};

const ROUTES: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: PATH.PATH_HOME,
        element: <Pages.Home />,
        label: 'Home',
        title: 'Home',
        isNav: true,
      } as CustomRouteObject,
      {
        path: PATH.PATH_COMPONENTS,
        element: <Pages.Components />,
        label: 'Components',
        title: 'Components',
        isNav: true,
      } as CustomRouteObject,
    ]
  },
];

export default ROUTES;
