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
        <h1>Hey, i'm <span>Fazil</span></h1>
        <h2>Fullstack Developer</h2>
      </div>
      <div className='header_about'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus obcaecati in totam qui ullam sit, quos maxime. Sit, illum sed ipsa quaerat soluta dolore ex labore! Vel at, dolores libero id,
          sint, alias quae consequatur illum enim non aliquam architecto mollitia praesentium laborum. Magnam ratione nobis quo dicta officia neque!</p>
      </div>
      <button onClick={confetti_btn} className='btn'>Click Here</button>
    </div>
  )
}
