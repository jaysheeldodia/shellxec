import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <nav className="fixed top-0 left-0 w-64 h-full bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">Section Navigation</h1>
      <ul className="space-y-4">
        <li><Link to="/" className="hover:text-gray-400">Getting Started</Link></li>
        <li><Link to="/basic-commands" className="hover:text-gray-400">Basic Commands</Link></li>
        <li><Link to="/directory-commands" className="hover:text-gray-400">Directory Operations</Link></li>
        <li><Link to="/environment-commands" className="hover:text-gray-400">Environment Variables</Link></li>
        <li><Link to="/batch-commands" className="hover:text-gray-400">Batch Commands</Link></li>
      </ul>
    </nav>
  )
}