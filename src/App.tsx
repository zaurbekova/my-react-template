import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Button } from './components/Button/Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/favicon.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TypeScript</h1>
      <div className="card">
        <Button variant="primary" onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </Button>
        <Button variant="secondary" size="sm">Secondary</Button>
        <Button variant="success" size="lg">Success</Button>
        <Button variant="danger" disabled>Disabled</Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;