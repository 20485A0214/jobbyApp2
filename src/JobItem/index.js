import {Link} from 'react-router-dom'
import {IoMdStar} from 'react-icons/io'
import {IoLocationSharp} from 'react-icons/io5'
import {BsBriefcaseFill} from 'react-icons/bs'
import './index.css'

const JobItem = props => {
  const {eachJob} = props
  const {
    companyLogoUrl,
    jobDescription,
    location,
    employmentType,
    packagePerAnnum,
    rating,
    title,
    id,
  } = eachJob
  return (
    <Link to={`/jobs/${id}`} className="link-item">
      <li className="jobitem-container">
        <div className="image-container">
          <img src={companyLogoUrl} alt="facebook" className="image" />
          <div className="title-container">
            <p className="title">{title}</p>
            <div className="star-container">
              <IoMdStar className="star" />
              <p className="rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="package-container">
          <div className="location-container">
            <IoLocationSharp className="location" />
            <p className="location-paragraph">{location}</p>
            <BsBriefcaseFill className="location" />
            <p className="location-paragraph">{employmentType}</p>
          </div>
          <p>{packagePerAnnum}</p>
        </div>
        <hr />
        <p>Description</p>
        <p className="location-paragraph">{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobItem
