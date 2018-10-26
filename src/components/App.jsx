import React from 'react';
import SlideComponent from './Common/Slide';
import WelcomeComponent from './Welcome/Welcome';

export const App = () => (
  <div id="app-content">
    <SlideComponent className="slide-welcome">
      <WelcomeComponent />
    </SlideComponent>
  </div>
);

export default App;
