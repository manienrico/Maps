import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootPage from './Root.js';

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

export default function App() {
  return (
    <div className="bg-gray-150">
      <Router history={history}>
        <Routes>
          <Route path="/" element={<RootPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}


