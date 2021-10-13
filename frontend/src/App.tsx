import React from 'react';
import './App.css';
import { Carousel, CarouselItem, defineCarouselProps } from './components/Carousel';

import airpods from './assets/airpods.png';
import iphone from './assets/iphone.png';
import tablet from './assets/tablet.png';

const imgs = [
  { url: iphone, title: 'xPhone', desc: 'lots to love.Less to spend Staring at $399' },
  { url: tablet, title: 'Tablet', desc: 'Just the right amount of everything' },
  { url: airpods, title: 'Buy a Tablet or xPhone for college.\nGet airPods' },
  { url: iphone, title: 'xPhone', desc: 'lots to love.Less to spend Staring at $399' },
  { url: tablet, title: 'Tablet', desc: 'Just the right amount of everything' },
  { url: airpods, title: 'Buy a Tablet or xPhone for college.\nGet airPods' },
];

const CarouselItems = imgs.map((it, index) => {
  return (
    <CarouselItem key={index}>
      <div className="carousel-item" style={{ backgroundImage: `url(${it.url})`, color: 'white', fontSize: '36px' }}>
        {it.title && <div>{it.title}</div>}
        {it.desc && <div>{it.desc}</div>}
      </div>
    </CarouselItem>
  );
});

const carouselProps = defineCarouselProps({
  width: '100vw',
  height: '50vh',
  showIndicator: true,
  showNavi: false,
  overPause: true
});

function App() {
  return (
    <div className="App">
      <Carousel {...carouselProps} animation="slideLeft" duration={3000}>
        {CarouselItems}
      </Carousel>
    </div>
  );
}

export default App;
