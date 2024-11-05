import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

function CodeBlock({ code, language = 'python' }) {
  return (
    <div className="my-4">
      <SyntaxHighlighter 
        language={language} 
        style={vscDarkPlus}
        className="rounded-lg"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock