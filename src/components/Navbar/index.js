import './index.css'

const Navbar = () => (
  <nav className="nav-container">
    <div className="icon-box">
      <img
        alt="students"
        className="icon"
        src="https://uxwing.com/wp-content/themes/uxwing/download/12-people-gesture/user-profile.png"
      />
      <p className="name">Students</p>
    </div>
    <div className="icon-box lesson-box">
      <img
        alt="lesson"
        className="icon"
        src="https://uxwing.com/wp-content/themes/uxwing/download/18-education/book.png"
      />
      <p className="name">Lesson Plan</p>
    </div>
    <div className="icon-box">
      <img
        alt="settings"
        className="icon"
        src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/setting-line.png"
      />
      <p className="name">Settings</p>
    </div>
  </nav>
)
export default Navbar
