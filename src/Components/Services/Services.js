import "./Services.css";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <div id="services" className="services-wrapper">
          <h2 className="services-heading">Xizmatlar</h2>
          <p className="services-paragraph">
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
            facilisis lacinia ex, eget sollicitudin massa pellentesque in.
            Vivamus mattis eros at sem pulvinar
          </p>
          <ul className="services-list">
            <li className="services-item veb-site">
              <a className="services-link" href="#">
                <h3 className="services-link-heading">Vebsayt tuzish</h3>
                <p className="services-link-paragraph">Lorem ipsum</p>
              </a>
            </li>
            <li className="services-item telegram-bot">
              <a className="services-link" href="#">
                <h3 className="services-link-heading">Telegram bot</h3>
                <p className="services-link-paragraph">Lorem ipsum</p>
              </a>
            </li>
            <li className="services-item smm">
              <a className="services-link" href="#">
                <h3 className="services-link-heading">SMM</h3>
                <p className="services-link-paragraph">Lorem ipsum</p>
              </a>
            </li>
            <li className="services-item design">
              <a className="services-link" href="#">
                <h3 className="services-link-heading">Grafik dizayn</h3>
                <p className="services-link-paragraph">Lorem ipsum</p>
              </a>
            </li>
            <li className="services-item crm">
              <a className="services-link" href="#">
                <h3 className="services-link-heading">CRM tizimlar</h3>
                <p className="services-link-paragraph">Lorem ipsum</p>
              </a>
            </li>
          </ul>
          <div className="services-links">
            <a className="link-to-order" href="#order-form">
              Buyurtma berish
            </a>
            <a className="link-to-services" href="#">
              Xizmatlar sahifasiga o’tish
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
