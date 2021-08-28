import "./Instruction.css";

function Instruction() {
  return (
    <section className="instruction">
      <div className="container container-small">
        <h2 className="instruction-heading">Biz qanday ishlaymiz?</h2>
        <p className="instruction-paragraph">
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
          facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
          mattis eros at sem pulvinar
        </p>
        <ol className="instruction-list">
          <li className="instruction-item demands">
            <div className="instruction-item-wrapper">
              <h3 className="instruction-item-heading">
                Talablarni aniqlab chiqamiz
              </h3>
              <p className="instruction-item-paragraph">
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
          </li>
          <li className="instruction-item solution">
            <div className="instruction-item-wrapper">
              <h3 className="instruction-item-heading">
                Bir necha yechimlarni taklif qilamiz
              </h3>
              <p className="instruction-item-paragraph">
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
          </li>
          <li className="instruction-item time">
            <div className="instruction-item-wrapper">
              <h3 className="instruction-item-heading">
                Loyiha uchun vaqt belgilaymiz
              </h3>
              <p className="instruction-item-paragraph">
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
          </li>
          <li className="instruction-item quality">
            <div className="instruction-item-wrapper">
              <h3 className="instruction-item-heading">
                A’lo sifat bilan bajarib topshiramiz
              </h3>
              <p className="instruction-item-paragraph">
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
          </li>
          <li className="instruction-item support">
            <div className="instruction-item-wrapper">
              <h3 className="instruction-item-heading">
                Qo’llab-quvvatlab boramiz
              </h3>
              <p className="instruction-item-paragraph">
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
          </li>
        </ol>
        <a className="link-to-order center" href="#order-form">
          Buyurtma berish
        </a>
      </div>
    </section>
  );
}

export default Instruction;
