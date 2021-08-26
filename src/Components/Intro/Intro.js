import "./Intro.css";
function Intro() {
  return (
    <section class="intro">
      <div class="container">
        <div class="intro-wrapper">
          <div class="intro-wrapper-info">
            <h1 class="intro-info-heading">
              Biznesingizni keyingi bosqichga olib chiqing
            </h1>

            <p class="intro-info-paragraph">
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in.
              Vivamus mattis eros at sem pulvinar
            </p>

            <a class="intro-info-link" href="#services">
              Xizmatlar bilan tanishish
            </a>
          </div>

          <iframe
            class="intro-youtube-video"
            width="458"
            height="258"
            src="https://www.youtube.com/embed/6_pru8U2RmM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Intro;
