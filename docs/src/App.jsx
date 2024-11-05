// docs/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import BasicCommands from './pages/BasicCommands'
import DirectoryCommands from './pages/DirectoryCommands'
import EnvironmentCommands from './pages/EnvironmentCommands'
import BatchCommands from './pages/BatchCommands'

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basic-commands" element={<BasicCommands />} />
            <Route path="/directory-commands" element={<DirectoryCommands />} />
            <Route path="/environment-commands" element={<EnvironmentCommands />} />
            <Route path="/batch-commands" element={<BatchCommands />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App