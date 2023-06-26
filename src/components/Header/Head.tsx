import './header.css'
import  confetti  from "https://esm.run/canvas-confetti@1";

export const Head = () => {

  const confetti_btn = () => {
      confetti({
        particleCount: 200,
        spread: 100
      });
  }


  return (
    <div className='container header_container'>
      <div className='header_titles'>
        <h1>Hey, i'm <span className='red'>Fazil</span></h1>
        <h2>Fullstack Developer</h2>
      </div>
      <div className='header_about'>
        <p>I'm a full-stack developer who loves to code and build things. Looking forward to find a job so i can showcase my love for coding and i prefer
          a company which have free ☕ available 😆.
        </p>
      </div>
      <button onClick={confetti_btn} className='btn'>Like✋</button>
    </div>
  )
}
