import './App.css'
import ProfilePic from './assets/profile.jpg'

function App() {
  return (
    <>
      <div>
        <h1>Hi, I'm Rafi Solichin, updated</h1>
        <p className='text-3xl font-bold underline'>Software engineer with a passion for creating impactful solutions.</p>
        <img src={ProfilePic} alt="Rafi Solichin" width={200} />
      </div>
    </>
  )
}

export default App
