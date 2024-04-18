import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const HomeRoute = props => {
  const onRedirectToJobs = () => {
    const {history} = props
    history.replace('/')
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">Find The Job That Fits Your Life</h1>
        <p className="home-paragraph">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
          <button
            type="button"
            className="find-button"
            onClick={onRedirectToJobs}
          >
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}
export default HomeRoute
