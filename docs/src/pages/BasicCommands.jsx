// docs/src/pages/BasicCommands.jsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Layout from '../components/Layout'

export default function BasicCommands() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Basic Commands</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Running Simple Commands</h2>
        <p className="mb-4">
          The core functionality of ShellXec is executing shell commands. Here's how to run basic commands:
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <SyntaxHighlighter language="python" style={vscDarkPlus}>
            {`import shellxec as sx
# Simple command execution
sx.run_command("echo Hello World")
# Capture command output
output = sx.run_command("echo Hello World", output=True)
print(output)  # Prints: Hello World`}
          </SyntaxHighlighter>
        </div>
        <h3 className="text-xl font-semibold mb-3">Parameters</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><code className="bg-gray-200 px-2 py-1 rounded">command</code>: The shell command to execute (string)</li>
          <li><code className="bg-gray-200 px-2 py-1 rounded">output</code>: Whether to capture and return command output (boolean)</li>
          <li><code className="bg-gray-200 px-2 py-1 rounded">shell</code>: Whether to run command through shell (boolean)</li>
        </ul>
        <h3 className="text-xl font-semibold mb-3">Error Handling</h3>
        <div className="bg-gray-800 rounded-lg p-6">
          <SyntaxHighlighter language="python" style={vscDarkPlus}>
            {`try:
    sx.run_command("invalid_command")
except sx.CommandError as e:
    print(f"Command failed: {e}")  # Handles command execution errors`}
          </SyntaxHighlighter>
        </div>
      </section>
    </Layout>
  )
}