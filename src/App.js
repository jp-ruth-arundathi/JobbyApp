import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './Components/LoginForm'
import Home from './Components/Home'
import NotFound from './Components/NotFound'
import ProtectedRoute from './Components/ProtectedRoute'
import AboutJobItem from './Components/AboutJobItem'
import Jobs from './Components/Jobs/index'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={AboutJobItem} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
