import Navbar from './components/Navbar'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="header-container">
      <div className="logo-box">
        <img
          alt="logo"
          className="logo"
          src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/digitalocean.png"
        />
      </div>
      <div className="top-section">top</div>
    </div>
    <div className="content">
      <Navbar />
      <div className="input-container">
        <div className="video-section">
          <img
            className="back"
            src="https://uxwing.com/wp-content/themes/uxwing/download/02-arrow/direction-left-position.png"
            alt="back"
          />
          <p className="title">Videos</p>
        </div>
        <div className="input-field">
          <input
            type="text"
            className="text-input"
            placeholder="Insert URL here"
          />
          <p className="text">or</p>
          <div className="file-input-field">
            <div className="file-input">upload</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default App
