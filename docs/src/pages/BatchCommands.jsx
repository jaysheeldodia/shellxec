// docs/src/pages/BatchCommands.jsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Layout from '../components/Layout'

export default function BatchCommands() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Batch Commands</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Running Multiple Commands</h2>
        <p className="mb-4">
          Execute multiple commands in sequence:
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <SyntaxHighlighter language="python" style={vscDarkPlus}>
            {`import shellxec as sx
# Run multiple commands
commands = [
    "mkdir test_dir",
    "cd test_dir",
    "touch test.txt",
    "echo 'Hello' > test.txt"
]
sx.run_commands_batch(commands)
# With output capture
commands_with_output = ["ls", "cat test.txt"]
results = sx.run_commands_batch(commands_with_output, output=True)
for cmd, output in results:
    print(f"Command: {cmd}\\nOutput: {output}\\n")`}
          </SyntaxHighlighter>
        </div>
        <h3 className="text-xl font-semibold mb-3">Parameters</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><code className="bg-gray-200 px-2 py-1 rounded">commands</code>: List of commands to execute</li>
          <li><code className="bg-gray-200 px-2 py-1 rounded">output</code>: Whether to capture output</li>
          <li><code className="bg-gray-200 px-2 py-1 rounded">stop_on_error</code>: Whether to stop on first error</li>
        </ul>
      </section>
    </Layout>
  )
}