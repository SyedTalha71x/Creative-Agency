"use client"
import React, { useState, useEffect } from 'react';
import Homepage from '../app/Homepage/page';
import Hero from '../app/Hero/page';
import Awards from '../app/Awards/page';
import Video from '../app/Video/page';
import Partners from '../app/Partners/page';
import Connect from '../app/Connect/page';
import Team from '../app/Team/page';
import MovingText from '../app/Movingtext/page';
import Slider from '../app/Slider/page';
import Projects from '../app/Projects/page';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <>
          <Hero />
          <Homepage />
          {/* <Parallax /> */}
          <Projects />
          {/* <VideoPlayer /> */}
          <Awards />
          {/* <Intro />
          <Description />
          <Projects1 /> */}
          <Video />
          <Team />
          <Partners />
          <MovingText />
          <Slider />
          <Connect />
        </>
      )}
    </>
  );
}
