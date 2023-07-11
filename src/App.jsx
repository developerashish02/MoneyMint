
import './App.css'
import Header from './components/Header'
import MainBody from './components/MainBody'
import SideBar from './components/SideBar'

function App() {

  return (
    <div className="flex h-full">
      <div className="w-1/6 bg-gray-200">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="w-5/6">
        <div className="bg-white">
          <Header />
        </div>
        <div >
          <MainBody />
        </div>
      </div>
    </div>
  )
}

export default App
