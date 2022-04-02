import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import Users from './components/users/Users'

function App() {
  return (
    <Provider store={store}>
      <div className="container mt-5">
        <Users />
      </div>
    </Provider>
  )
}

export default App
