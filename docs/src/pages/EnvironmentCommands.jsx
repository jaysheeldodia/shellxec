// docs/src/pages/EnvironmentCommands.jsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Layout from '../components/Layout'

export default function EnvironmentCommands() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Environment Variables</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Setting Environment Variables</h2>
        <p className="mb-4">
          Execute commands with custom environment variables:
        </p>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <SyntaxHighlighter language="python" style={vscDarkPlus}>
            {`import shellxec as sx
# Set custom environment variables
env_vars = {"API_KEY": "secret123", "DEBUG": "true"}
sx.run_command_with_env_var("echo $API_KEY", env_vars)
# Capture output with environment variables
result = sx.run_command_with_env_var("echo $DEBUG", env_vars, output=True)
print(result)  # Prints: true`}
          </SyntaxHighlighter>
        </div>
        <h3 className="text-xl font-semibold mb-3">Parameters</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><code className="bg-gray-200 px-2 py-1 rounded">command</code>: The command to execute</li>
          <li><code className="bg-gray-200 px-2 py-1 rounded">env_vars</code>: Dictionary of environment variables</li>
          <li><code className="bg-gray-200 px-2 py-1 rounded">output</code>: Whether to capture output</li>
        </ul>
      </section>
    </Layout>
  )
}