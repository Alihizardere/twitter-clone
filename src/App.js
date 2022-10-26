import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
import Widgets from './components/Widgets/Widgets'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed*/}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  )
}

export default App
