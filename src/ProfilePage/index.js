import './index.css'

const ProfilePage = props => {
  const {profileData} = props
  const {name, profileImageUrl, shortBio} = profileData
  return (
    <div className="profile-container">
      <img src={profileImageUrl} alt="goald" />
      <h1 className="profile-heading">{name}</h1>
      <p className="profile-paragraph">{shortBio}</p>
    </div>
  )
}

export default ProfilePage
