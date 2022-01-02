import './App.css'

import Header from './components/Header'
import Main from './components/Main'

import { StateProvider } from './contexts/StateContext'

const App = () => {
  return (
    <StateProvider>
      <div className="container">
        <Header />
        <Main />
      </div>
    </StateProvider>
    
  )
}

export default App