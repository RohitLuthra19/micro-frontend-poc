import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppOne = React.lazy(() => import('app1/AppOne'));
const Detail = React.lazy(() => import('app1/Detail'));
const version = process.env.BUILD_DATE;

function AppOneLazy() {
  return (<React.Suspense fallback={'Loading...'}>
    <AppOne />
  </React.Suspense>)
}
function DetailLazy() {
  return <React.Suspense fallback={'Loading...'}>
  <Detail />
</React.Suspense>
}
export default function App({ title }) {
  return (
    <div>
      {title}
      {version}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppOneLazy />} />
          <Route path="/app1/:id" element={<DetailLazy />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}