import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppOne1 = React.lazy(() => import('app1/AppOne'));
const Detail1 = React.lazy(() => import('app1/Detail'));
const AppOne2 = React.lazy(() => import('app2/AppTwo'));
const Detail2 = React.lazy(() => import('app2/Detail'));
const version = process.env.BUILD_DATE;

function AppOneLazy1() {
  return (<React.Suspense fallback={'Loading...'}>
    <AppOne1 />
  </React.Suspense>)
}
function DetailLazy1() {
  return <React.Suspense fallback={'Loading...'}>
    <Detail1 />
  </React.Suspense>
}

function AppOneLazy2() {
  return (<React.Suspense fallback={'Loading...'}>
    <AppOne2 />
  </React.Suspense>)
}
function DetailLazy2() {
  return <React.Suspense fallback={'Loading...'}>
    <Detail2 />
  </React.Suspense>
}

function Host() {
  return (<div>
    <AppOneLazy1 />
    <AppOneLazy2 />
  </div>)
}
export default function App({ title }) {
  return (
    <div>
      <div>{title}: {version}</div>
      <br/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Host />} />
          <Route path="/app1/:id" element={<DetailLazy1 />} />
          <Route path="/app2/:id" element={<DetailLazy2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}