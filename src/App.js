import React from 'react';
import './sass/App.scss';
import {Header} from './components/Header';
import {Images} from './components/Images';
import {ViewWork} from './components/ViewWork';
import {ContactMe} from './components/ContactMe';
import {AboutMe} from './components/AboutMe';
import {ImagesViewProvider} from './context/ImagesView';

function App() {
  return (
    <div className="App">
      <Header />
      <ImagesViewProvider>
        <ViewWork />
        <Images />
      </ImagesViewProvider>
      <AboutMe />
      <ContactMe />
    </div>
  );
}

export default App;
