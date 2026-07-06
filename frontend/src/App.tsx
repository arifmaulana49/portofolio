import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-slate-800 rounded-xl p-8 shadow-2xl border border-slate-700 text-center space-y-6">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
          React + Tailwind v4
        </h1>
        
        <p className="text-slate-400">
          Proyek frontend Anda berhasil berjalan dengan Bun, Vite, React, dan Tailwind CSS v4!
        </p>

        <div className="py-4">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 active:scale-95 transition-all rounded-lg font-medium shadow-md shadow-violet-500/20"
          >
            Count: {count}
          </button>
        </div>

        <div className="text-xs text-slate-500 flex justify-center gap-4">
          <span>TypeScript Enabled</span>
          <span>•</span>
          <span>Bun Runtime</span>
        </div>
      </div>
    </div>
  )
}

export default App
