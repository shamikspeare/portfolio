import React from 'react'
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

const Home = () => {
  return (
    <>
      <div className="container">
        <section className="lg:min-h-screen">
          <About />
        </section>

        <section className="lg:min-h-screen">
          <Projects />
        </section>

        <section className="lg:min-h-screen">
          <Skills />
        </section>

        <div className="bg-neutral-900 rounded-t-[50px] sm:rounded-t-[80px] overflow-hidden mt-20">
          <section className="min-h-[60vh] flex items-center justify-center py-10">
            <Contact />
          </section>
        </div>
      </div>


    </>

  )
}

export default Home