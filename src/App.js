import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import Apply from './pages/apply'
import './index.css'
import './Styles/styles.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/apply" component={Apply} exact />
        {/* <Route path="/signin" component={SigninPage} exact /> */}
      </Switch>
    </Router>
  )
}

export default App
