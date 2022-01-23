import { lazy, LazyExoticComponent } from 'react';
import pages from '../01-lazyload/pages';
const { LazyPage1, LazyPage2, LazyPage3 } = pages()

type JSXComponent = () => JSX.Element

interface Route {
  to: string
  path: string
  Component: JSXComponent | LazyExoticComponent<JSXComponent>
  name: string
}

const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'))

const routes: Route[] = [
  { to: '/lazy1', path: 'lazy1', Component: Lazy1, name: 'Lazy-1' },
  { to: '/lazy2', path: 'lazy2', Component: Lazy2, name: 'Lazy-2' },
  { to: '/lazy3', path: 'lazy3', Component: Lazy3, name: 'Lazy-3' },
]

export default routes