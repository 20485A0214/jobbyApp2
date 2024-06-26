import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedFile = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/Login" />
  }
  return <Route {...props} />
}
export default ProtectedFile
