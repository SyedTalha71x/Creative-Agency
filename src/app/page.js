"use client";
import Homepage from '../app/Homepage/page'
import Hero from '../app/Hero/page'
import Awards from '../app/Awards/page'
import Video from '../app/Video/page'
import Partners from '../app/Partners/page'
import Connect from '../app/Connect/page'
import Team from '../app/Team/page'
import MovingText from '../app/Movingtext/page'
import Slider from '../app/Slider/page'
import Projects from '../app/Projects/page'
import Parallax from '../app/ParallaxAffect/page'
import { useState, useEffect } from 'react';



export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && <Hero />}
      {isClient && <Homepage />}
      {/* {isClient && <Parallax />} */}
      {isClient && <Projects />}
      {/* {isClient && <VideoPlayer />} */}
      {isClient && <Awards />}
      {/* {isClient && <Intro />}
      {isClient && <Description />}
      {isClient && <Projects1 />} */}
      {isClient && <Video />}
      {isClient && <Team />}
      {isClient && <Partners />}
      {isClient && <MovingText />}
      {isClient && <Slider />}
      {isClient && <Connect />}
    </>
  );
}
