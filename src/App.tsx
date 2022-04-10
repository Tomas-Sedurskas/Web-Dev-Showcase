import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, SortingAlgorithm, Error404 } from 'views';
import { Layout } from 'containers/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<Home />} />
          <Route element={<SortingAlgorithm />} path="sorting-algorithm" />
          <Route element={<Error404 />} path="*" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
