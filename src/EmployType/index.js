import './index.css'

const EmployType = () => (
  <>
    <li className="employList">
      <input type="checkbox" id="Full" name="myCeckbox" />
      <label htmlFor="Full">Full Time</label>
    </li>

    <li className="employList">
      <input type="checkbox" id="part" name="myCeckbox" />
      <label htmlFor="part">Part Time</label>
    </li>
    <li className="employList">
      <input type="checkbox" id="Free" name="myCeckbox" />
      <label htmlFor="Free">Freelencer</label>
    </li>
    <li className="employList">
      <input type="checkbox" id="intern" name="myCeckbox" />
      <label htmlFor="intern">Internship</label>
    </li>
  </>
)
export default EmployType
