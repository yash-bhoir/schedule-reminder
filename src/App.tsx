import { useState } from 'react';
import Home from './pages/home';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
