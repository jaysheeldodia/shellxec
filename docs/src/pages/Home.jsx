// docs/src/pages/Home.jsx
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">ShellXec Documentation</h1>
      <p className="mb-4">
        ShellXec is a Python library for executing shell commands with enhanced control and features.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Installation</h2>
      <pre className="bg-gray-800 text-white p-4 rounded">pip install shellxec</pre>
    </Layout>
  )
}