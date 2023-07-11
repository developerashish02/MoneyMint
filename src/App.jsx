
import './App.css'
import Header from './components/Header'
import MainBody from './components/MainBody'
import SideBar from './components/SideBar'

function App() {

  return (
    <div className=' h-screen'>
      <div className="w-16 bg-gray-200">
        <SideBar />
      </div>
      <div className="w-full bg-white">
        <Header />
      </div>
      <MainBody />
    </div>
  )
}

export default App
