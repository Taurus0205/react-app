import "./Instruction.css";

function Instruction() {
  return (
    <section class="instruction">
      <div class="container container-small">
        <h2 class="instruction-heading">Biz qanday ishlaymiz?</h2>
        <p class="instruction-paragraph">
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
          facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
          mattis eros at sem pulvinar
        </p>

        <ol class="instruction-list">
          <li class="instruction-item demands">
            <div class="instruction-item-wrapper">
              <h3 class="instruction-item-heading">
                Talablarni aniqlab chiqamiz
              </h3>
              <p class="instruction-item-paragraph">
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
          </li>

          <li class="instruction-item solution">
            <div class="instruction-item-wrapper">
              <h3 class="instruction-item-heading">
                Bir necha yechimlarni taklif qilamiz
              </h3>
              <p class="instruction-item-paragraph">
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
          </li>

          <li class="instruction-item time">
            <div class="instruction-item-wrapper">
              <h3 class="instruction-item-heading">
                Loyiha uchun vaqt belgilaymiz
              </h3>
              <p class="instruction-item-paragraph">
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
          </li>

          <li class="instruction-item quality">
            <div class="instruction-item-wrapper">
              <h3 class="instruction-item-heading">
                A’lo sifat bilan bajarib topshiramiz
              </h3>
              <p class="instruction-item-paragraph">
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
          </li>

          <li class="instruction-item support">
            <div class="instruction-item-wrapper">
              <h3 class="instruction-item-heading">
                Qo’llab-quvvatlab boramiz
              </h3>
              <p class="instruction-item-paragraph">
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
          </li>
        </ol>

        <a class="link-to-order center" href="#order-form">
          Buyurtma berish
        </a>
      </div>
    </section>
  );
}

export default Instruction;
