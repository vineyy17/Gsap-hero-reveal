import './App.scss'
import { gsap } from 'gsap'
import arrow from './images/arrow-right.svg'
import imgGirl from './images/girl.webp'
import imgBoy from './images/boy.webp'
import { useEffect, useRef } from 'react'

function App() {
  const app = useRef(null)
  const images = useRef(null)
  const content = useRef(null)

  useEffect(() => {
    // IMAGE VARIABLES
    const girlImage = images.current.firstElementChild
    const boyImage = images.current.lastElementChild

    // CONTENT VARIABLES
    const headlineFirst = content.current.children[0].children[0]
    const headlineSecond = headlineFirst.nextSibling
    const headlineThird = headlineSecond.nextSibling
    const contentP = content.current.children[1]
    const contentButton = content.current.children[2]

    // Removing initial flash

    gsap.to(app.current, {
      duration: 0,
      css: { visibility: 'visible' },
    })

    // Images animation

    gsap
      .timeline({ delay: 0.5 })
      .fromTo(
        girlImage,
        { y: 1200 },
        { y: 0, ease: 'power3.easeOut', duration: 1.2 },
      )
      .fromTo(
        girlImage.firstElementChild,
        {
          scale: 1.6,
        },
        { duration: 2, scale: 1, ease: 'Power3.easeOut' },
        '.2',
      )
      .fromTo(
        boyImage,
        { y: 1200 },
        { y: 0, ease: 'power3.easeOut', duration: 1.2 },
        '.2',
      )
      .fromTo(
        boyImage.firstElementChild,
        {
          scale: 1.6,
        },
        { duration: 2, scale: 1, ease: 'Power3.easeOut' },
        '.2',
      )

    //Content animation
    gsap
      .timeline()
      .fromTo(
        headlineFirst.children,

        { y: 44 },
        { duration: 1, y: 0, ease: 'Power3.easeOut', delay: 0.8 },
        0.15,
      )
      .fromTo(
        headlineSecond.children,

        { y: 44 },
        { duration: 1, y: 0, ease: 'Power3.easeOut', delay: 0.8 },
        0.15,
      )
      .fromTo(
        headlineThird.children,

        { y: 44 },
        { duration: 1, y: 0, ease: 'Power3.easeOut', delay: 0.8 },
        0.15,
      )
      .fromTo(
        contentP,
        { y: 20, opacity: 0 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: 'Power3.easeOut',
        },
        1.4,
      )
      .fromTo(
        contentButton,
        { y: 20, opacity: 0 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: 'Power3.easeOut',
        },
        1.6,
      )
  }, [])

  return (
    <div className="hero" ref={app}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={content}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Relieving the burden
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    of disease caused
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviours.</div>
                </div>
              </h1>
              <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </p>
              <div className="btn-row">
                <button className="explore-button">
                  explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="arrow" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={images}>
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
