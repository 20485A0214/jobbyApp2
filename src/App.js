import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import LoginRoute from './LoginRoute'
import HomeRoute from './HomeRoute'
import JobsRoute from './JobsRoute'
import NotFoundRoute from './NotFoundRoute'
import ProtectedFile from './ProtectedFile'
import AboutJobItem from './JobItemDetailsRoute'
// These are the lists used in the application. You can move them to any component needed.

const App = () => (
  <BrowserRouter>
    <Switch>
      <ProtectedFile exact path="/" component={HomeRoute} />
      <Route exact path="/login" component={LoginRoute} />
      <ProtectedFile exact path="/jobs" component={JobsRoute} />
      <ProtectedRoute exact path="/jobs/:id" component={AboutJobItem} />
      <Route component={NotFoundRoute} />
    </Switch>
  </BrowserRouter>
)

export default App
