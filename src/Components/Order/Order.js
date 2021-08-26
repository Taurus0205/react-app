import "./Order.css";

function Order() {
  return (
    <section id="order-form" class="order-form">
      <div class="container container-small">
        <h2 class="order-form-heading">Buyurtma berish</h2>

        <p class="order-form-paragraph">
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
          facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
          mattis eros at sem pulvinar
        </p>

        <form class="form-filling" action="#" method="POST">
          <input
            class="form-filling-input"
            name="user_name"
            type="text"
            placeholder="Ismingiz"
            required
          />

          <input
            class="form-filling-input"
            name="user_phone_number"
            type="tel"
            placeholder="Telefon raqamingiz"
            required
          />

          <div class="select-wrapper">
            <select
              class="form-filling-input form-filling-select"
              name="user_service_choice"
              id="user_service_choice"
              required
            >
              <option value="" selected>
                Xizmat turlari
              </option>
              <option value="web_site">Vebsayt tuzish</option>
              <option value="telegram_bot">Telegram bot</option>
              <option value="smm">SMM</option>
              <option value="graphic_designer">Grafik dizayn</option>
              <option value="crm_systems">CRM tizimlar</option>
            </select>
          </div>

          <button class="form-filling-button" type="submit">
            Buyurtma berish
          </button>
        </form>
      </div>
    </section>
  );
}

export default Order;
