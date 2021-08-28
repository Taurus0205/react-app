import "./Header.css";

// images
import Logo from "../../Assests/images/pixer-logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a className="header-logo-link" href="#">
            <img
              className="header-logo"
              src={Logo}
              alt="a logo of Pixer"
              width={58}
              height={20}
            />
          </a>
          <nav className="nav-bar">
            <ul className="nav-list">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Bosh sahifa
                </a>
              </li>
              <li className="nav-item services">
                <a className="nav-link" href="#">
                  Xizmatlar
                </a>
                <ul className="nav-services-list">
                  <li className="nav-services-item">
                    <a className="nav-services-link" href="#">
                      Vebsayt
                    </a>
                  </li>
                  <li className="nav-services-item">
                    <a className="nav-services-link" href="#">
                      Telegram bot
                    </a>
                  </li>
                  <li className="nav-services-item">
                    <a className="nav-services-link" href="#">
                      SMM
                    </a>
                  </li>
                  <li className="nav-services-item">
                    <a className="nav-services-link" href="#">
                      Grafik dizayn
                    </a>
                  </li>
                  <li className="nav-services-item">
                    <a className="nav-services-link" href="#">
                      CRM tizim
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Jamoa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Kontaktlar
                </a>
              </li>
            </ul>
          </nav>
          <a className="header-phone" href="tel:998909213711">
            +998 90 921 37 11
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
