import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-black-transparent shadow">
      <a className="navbar-brand" href="/">
        FrontendFunn
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
