import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div class="container">
        <div class="header-wrapper">
          <a class="header-logo-link" href="#">
            <img
              class="header-logo"
              src="../../images/pixer-logo.svg"
              alt="a logo of Pixer"
              width="58"
              height="20"
            />
          </a>
          <nav class="nav-bar">
            <ul class="nav-list">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Bosh sahifa
                </a>
              </li>

              <li class="nav-item services">
                <a class="nav-link" href="#">
                  Xizmatlar
                </a>
                <ul class="nav-services-list">
                  <li class="nav-services-item">
                    <a class="nav-services-link" href="#">
                      Vebsayt
                    </a>
                  </li>

                  <li class="nav-services-item">
                    <a class="nav-services-link" href="#">
                      Telegram bot
                    </a>
                  </li>

                  <li class="nav-services-item">
                    <a class="nav-services-link" href="#">
                      SMM
                    </a>
                  </li>

                  <li class="nav-services-item">
                    <a class="nav-services-link" href="#">
                      Grafik dizayn
                    </a>
                  </li>

                  <li class="nav-services-item">
                    <a class="nav-services-link" href="#">
                      CRM tizim
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Portfolio
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Jamoa
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Kontaktlar
                </a>
              </li>
            </ul>
          </nav>

          <a class="header-phone" href="tel:998909213711">
            +998 90 921 37 11
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
