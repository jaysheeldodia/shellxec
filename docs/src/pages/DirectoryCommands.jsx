// docs/src/pages/DirectoryCommands.jsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Layout from '../components/Layout'

export default function DirectoryCommands() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Directory Commands</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Working with Directories</h2>
        <p className="mb-4">
          Execute commands in specific directories without changing your program's working directory:
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <SyntaxHighlighter language="python" style={vscDarkPlus}>
            {`import shellxec as sx
# Run command in a specific directory
sx.run_command_in_directory("ls", "/path/to/directory")
# With output capture
files = sx.run_command_in_directory("ls", "/path/to/directory", output=True)
print(files)  # Lists files in specified directory`}
          </SyntaxHighlighter>
        </div>
        <h3 className="text-xl font-semibold mb-3">Parameters</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><code className="bg-gray-200 px-2 py-1 rounded">command</code>: The command to execute</li>
          <li><code className="bg-gray-200 px-2 py-1 rounded">directory</code>: Target directory path</li>
          <li><code className="bg-gray-200 px-2 py-1 rounded">output</code>: Whether to capture output</li>
        </ul>
      </section>
    </Layout>
  )
}