import React from 'react';
const CounterAppOne = React.lazy(() => import('app1/CounterAppOne'));
const CounterAppTwo = React.lazy(() => import('app2/CounterAppTwo'));
const version = process.env.BUILD_DATE;

export default function App({ title }) {
  return (
    <div>
      {title}
      {version}
      <div>
        <React.Suspense fallback={'Loading...'}>
          <CounterAppOne />
        </React.Suspense>
      </div>
      <div>
        <React.Suspense fallback={'Loading...'}>
          <CounterAppTwo />
        </React.Suspense>
      </div>
    </div>
  );
}
