import './App.css'
import NavBar from './components/navbar'

function App() {
 

  return (
    <>
    <NavBar />
      <h1 className='text-center font mt-24'>RECIPE HOME</h1>

      <div className='m-auto text-center w-10/12 h-96 border-4 border-indigo-500/100'>
        ALL RECIPE
        <div className='mx-auto mt-5 w-10/12 border-4 border-indigo-500/100'>RECIPE</div>
        <div className='mx-auto mt-5 w-10/12 border-4 border-indigo-500/100'>RECIPE</div>
        <div className='mx-auto mt-5 w-10/12 border-4 border-indigo-500/100'>RECIPE</div>
      </div>
    </>
  )
}

export default App
