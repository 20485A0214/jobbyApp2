import {IoMdHome, IoIosLogOut} from 'react-icons/io'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/Login')
  }
  return (
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
        alt="website logo"
        className="header-image"
      />
      <div className="sub-header-container">
        <p>
          <Link className="header-paragraph" to="/">
            Home
          </Link>
        </p>
        <p>
          <Link className="header-paragraph" to="/jobs">
            Jobs
          </Link>
        </p>
      </div>
      <button type="button" className="logout-button" onClick={onClickLogout}>
        Logout
      </button>
      <div className="Header-icons">
        <Link to="/">
          <IoMdHome size="25px" color="white" padding-left="20px" />
        </Link>
        <Link to="/Jobs">
          <BsFillBriefcaseFill size="25px" color="white" padding-left="20px" />
        </Link>
        <IoIosLogOut
          size="25px"
          color="white"
          padding-left="20px"
          onClick={onClickLogout}
        />
      </div>
    </div>
  )
}
export default withRouter(Header)
