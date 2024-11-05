// docs/src/components/Layout.jsx
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 overflow-auto">
      {children}
    </div>
  )
}

export default Layout