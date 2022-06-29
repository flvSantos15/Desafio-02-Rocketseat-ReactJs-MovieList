import { lazy, Suspense } from 'react';
import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

import { Movies } from './movieContext'

const Content = lazy(() => import("./components/Content"))

export function App() {
  return (
    <Movies>
      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <SideBar />

        <Suspense fallback={<div>Carregando...</div>}>
          <Content />
        </Suspense>

      </div>
    </Movies>
  )
}