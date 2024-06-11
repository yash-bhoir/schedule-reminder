import  { useState } from 'react';

function Navbar() {
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [notificationDropdown, setNotificationDropdown] = useState(false);

  const toggleProfileDropdown = () => {
    setProfileDropdown(!profileDropdown);
  };

  const toggleNotificationDropdown = () => {
    setNotificationDropdown(!notificationDropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="welcome-label">Welcome, John</div>
      </div>
      <div className="navbar-center">
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
      <div className="navbar-right">
        <div className="notification-icon" onClick={toggleNotificationDropdown}>
          <i className="fa fa-bell"></i>
          {notificationDropdown && (
            <div className="notification-dropdown">
              <p>No new notifications</p>
            </div>
          )}
        </div>
        <div className="profile" onClick={toggleProfileDropdown}>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="profile-photo"
          />
          {profileDropdown && (
            <div className="profile-dropdown">
              <p>Login</p>
              <p>Logout</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
