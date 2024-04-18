import './index.css'

const NotFoundRoute = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      alt="not found"
      className="not-found-image"
    />
    <h1 className="notfound-heading">Page Not Found</h1>
    <p className="notfound-paragraph">
      We are sorry,the page you requested could not be find
    </p>
  </div>
)

export default NotFoundRoute
