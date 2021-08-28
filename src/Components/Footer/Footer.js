import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-rights">
            <h2 className="footer-heading">Copyright 2020</h2>
            <p className="footer-paragraph">
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in.
              Vivamus mattis eros at sem pulvinar tincidunt.
            </p>
          </div>
          <div className="footer-pages">
            <h2 className="footer-heading">Sayt sahifalari</h2>
            <ul className="footer-list">
              <li className="footer-item">
                <a className="footer-link" href="#">
                  Bosh sahifa
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  Xizmatlar
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  Jamoa
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  Blog
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  Kontaktlar
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-sites">
            <h2 className="footer-heading">Biz internetda</h2>
            <ul className="footer-list">
              <li className="footer-item pseudo telegram">
                <a
                  className="footer-link"
                  href="https://xn--80affa3aj0al.xn--80asehdb/#/login"
                  target="_blank"
                >
                  Telegram
                </a>
              </li>
              <li className="footer-item pseudo facebook">
                <a
                  className="footer-link"
                  href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwia-bXn57vwAhVMu9UKHValBIsYABAAGgJ3cw&ae=2&ohost=www.google.com&cid=CAESQOD2Mo-J-kqwTE9XgtGqnvxPbgODMGAL-4sDoNOUkrKb7G5QtxkGcoBHPSUy90bLvr65lMOGISNRvPGaNb2hXoM&sig=AOD64_0RL-OAKFk4ry4wuZ9LUNogVmgsow&q&adurl&ved=2ahUKEwitn67n57vwAhVCCBAIHY4wBUUQ0Qx6BAgDEAE"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li className="footer-item pseudo instagram">
                <a
                  className="footer-link"
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
