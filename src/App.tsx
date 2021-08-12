import React from 'react';

import MainWindow from './components/MainWindow';
import Searchbar from './components/Searchbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Searchbar />
      <MainWindow />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
