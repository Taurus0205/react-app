import "./Footer.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-wrapper">
          <div class="footer-rights">
            <h2 class="footer-heading">Copyright 2020</h2>

            <p class="footer-paragraph">
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in.
              Vivamus mattis eros at sem pulvinar tincidunt.
            </p>
          </div>

          <div class="footer-pages">
            <h2 class="footer-heading">Sayt sahifalari</h2>
            <ul class="footer-list">
              <li class="footer-item">
                <a class="footer-link" href="#">
                  Bosh sahifa
                </a>
              </li>

              <li class="footer-item">
                <a class="footer-link" href="#">
                  Xizmatlar
                </a>
              </li>

              <li class="footer-item">
                <a class="footer-link" href="#">
                  Portfolio
                </a>
              </li>

              <li class="footer-item">
                <a class="footer-link" href="#">
                  Jamoa
                </a>
              </li>

              <li class="footer-item">
                <a class="footer-link" href="#">
                  Blog
                </a>
              </li>

              <li class="footer-item">
                <a class="footer-link" href="#">
                  Kontaktlar
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-sites">
            <h2 class="footer-heading">Biz internetda</h2>
            <ul class="footer-list">
              <li class="footer-item pseudo telegram">
                <a
                  class="footer-link"
                  href="https://xn--80affa3aj0al.xn--80asehdb/#/login"
                  target="_blank"
                >
                  Telegram
                </a>
              </li>

              <li class="footer-item pseudo facebook">
                <a
                  class="footer-link"
                  href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwia-bXn57vwAhVMu9UKHValBIsYABAAGgJ3cw&ae=2&ohost=www.google.com&cid=CAESQOD2Mo-J-kqwTE9XgtGqnvxPbgODMGAL-4sDoNOUkrKb7G5QtxkGcoBHPSUy90bLvr65lMOGISNRvPGaNb2hXoM&sig=AOD64_0RL-OAKFk4ry4wuZ9LUNogVmgsow&q&adurl&ved=2ahUKEwitn67n57vwAhVCCBAIHY4wBUUQ0Qx6BAgDEAE"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>

              <li class="footer-item pseudo instagram">
                <a
                  class="footer-link"
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
