import "./Order.css";

function Order() {
  return (
    <section id="order-form" className="order-form">
      <div className="container container-small">
        <h2 className="order-form-heading">Buyurtma berish</h2>
        <p className="order-form-paragraph">
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
          facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
          mattis eros at sem pulvinar
        </p>
        <form className="form-filling" action="#" method="POST">
          <input
            className="form-filling-input"
            name="user_name"
            type="text"
            placeholder="Ismingiz"
            required
          />
          <input
            className="form-filling-input"
            name="user_phone_number"
            type="tel"
            placeholder="Telefon raqamingiz"
            required
          />
          <div className="select-wrapper">
            <select
              className="form-filling-input form-filling-select"
              name="user_service_choice"
              id="user_service_choice"
              required
            >
              <option>Xizmat turlari</option>
              <option value="web_site">Vebsayt tuzish</option>
              <option value="telegram_bot">Telegram bot</option>
              <option value="smm">SMM</option>
              <option value="graphic_designer">Grafik dizayn</option>
              <option value="crm_systems">CRM tizimlar</option>
            </select>
          </div>
          <button className="form-filling-button" type="submit">
            Buyurtma berish
          </button>
        </form>
      </div>
    </section>
  );
}

export default Order;
