import "./Services.css";

function Services() {
  return (
    <section class="services">
      <div class="container">
        <div id="services" class="services-wrapper">
          <h2 class="services-heading">Xizmatlar</h2>

          <p class="services-paragraph">
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
            facilisis lacinia ex, eget sollicitudin massa pellentesque in.
            Vivamus mattis eros at sem pulvinar
          </p>

          <ul class="services-list">
            <li class="services-item veb-site">
              <a class="services-link" href="#">
                <h3 class="services-link-heading">Vebsayt tuzish</h3>
                <p class="services-link-paragraph">Lorem ipsum</p>
              </a>
            </li>

            <li class="services-item telegram-bot">
              <a class="services-link" href="#">
                <h3 class="services-link-heading">Telegram bot</h3>
                <p class="services-link-paragraph">Lorem ipsum</p>
              </a>
            </li>

            <li class="services-item smm">
              <a class="services-link" href="#">
                <h3 class="services-link-heading">SMM</h3>
                <p class="services-link-paragraph">Lorem ipsum</p>
              </a>
            </li>

            <li class="services-item design">
              <a class="services-link" href="#">
                <h3 class="services-link-heading">Grafik dizayn</h3>
                <p class="services-link-paragraph">Lorem ipsum</p>
              </a>
            </li>

            <li class="services-item crm">
              <a class="services-link" href="#">
                <h3 class="services-link-heading">CRM tizimlar</h3>
                <p class="services-link-paragraph">Lorem ipsum</p>
              </a>
            </li>
          </ul>

          <div class="services-links">
            <a class="link-to-order" href="#order-form">
              Buyurtma berish
            </a>
            <a class="link-to-services" href="#">
              Xizmatlar sahifasiga o’tish
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
