import React, { useEffect, useState } from 'react';

import P5 from '../p5/p5';
import Loading from '../components/Loading';

import projectsInfo from '../data/projects';
import { Projects } from '../components/Projects';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function Home() {

  const [isLoadingDOM, setIsLoadingDOM] = useState(true);
  
  useEffect(() => {

    setTimeout(() => {
      //window.addEventListener('load', setIsLoading(false));
      window.addEventListener('DOMContentLoaded', setIsLoadingDOM(false));
    }, 2900);

  }, []);

  return isLoadingDOM ? <Loading/>
  :

    <>

    <P5 />

    <div className="container mx-auto my-14 px-6 md:px-12 lg:px-12 text-center text-primary text-4xl font-mono">

      <Header />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center content-center">

        {
            projectsInfo.map( 
                ( info ) => (
                    <Projects 
                      key={ info.id }
                      info={ info }
                    />
                )
            )
        }
        
      </div>

      <Footer />

    </div>

    </>

}

