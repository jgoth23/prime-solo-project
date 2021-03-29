import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1>BMX Racing</h1>
        <img src="https://image.shutterstock.com/image-photo/venlo-limburg-nertherlands-april-7th-600w-1482630512.jpg"/>
        <p>What is it?</p>
        <h2>Bicycle motocross</h2>
        <img src="https://image.shutterstock.com/image-photo/chula-vista-california-august-26-600w-707756698.jpg"/>
        <p>How does it work?</p>
      </div>
      <div>
      <img src="https://image.shutterstock.com/image-photo/start-race-260nw-176142542.jpg"/>
      </div>
      <div>
        <p>What is the goal?</p>
      </div>
      <div>
      <img src="https://image.shutterstock.com/image-photo/estarreja-portugal-may-26-school-600w-139974343.jpg"/>
      </div>
    </div>
  );
}

export default AboutPage;
