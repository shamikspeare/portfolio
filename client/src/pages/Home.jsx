import React from 'react'
import About from "../components/About"
import Projects from "../components/Projects"
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { ProgressiveBlur } from "@/components/magicui/progressive-blur";

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

      <section className="lg:min-h-screen flex items-center justify-center">
        <Contact />
      </section>

      <Footer />
  </div>

   
    </>

  )
}

export default Home