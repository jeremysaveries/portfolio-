<script>
  import CardWithModal from "./components/cardWithModel.svelte"; // Assurez-vous que le chemin est correct
  import ContactForm from "./components/contactForm.svelte";
  import Softskill from "./components/softskill.svelte";
</script>

<header>
  <div class="headerContainer">
    <ul class="titleHeader">
      <li class="firstName">jeremy</li>
      <li class="lastName">saveries</li>
    </ul>
  </div>
</header>

<main>
  <div class="mainContainer">
    <div class="titlePoste">
      <h2 class="postName">developpeur full stack</h2>
    </div>

    <div class="mainContent">
      <div class="présentation">
        <p>
          À 34 ans, je suis actuellement en reconversion professionnelle dans le
          domaine du développement web. Après avoir suivi une formation de
          développeur web, j'ai acquis une solide maîtrise des langages web tels
          que HTML, CSS, JavaScript, ainsi que la gestion de bases de données.
          J'utilise également des outils comme Figma pour concevoir des
          maquettes et des interfaces utilisateur.Au cours de ma reconversion,
          j'ai eu l'opportunité d'améliorer mes compétences lors d'un stage de 1
          mois auprès de développeurs web expérimentés. Actuellement, je
          recherche un CDI dans le développement web et propose également mes
          services en freelance pour des missions ponctuelles.Si vous êtes à la
          recherche d'un collaborateur en CDI ou d'un prestataire pour une
          mission en freelance, n'hésitez pas à me contacter pour discuter de
          vos projets.
        </p>
      </div>

      <div class="photoProfil">
        <img
          class="photo"
          src="public/img/photoprofil.jpg"
          alt="photo de profil"
        />
      </div>
    </div>

    <div class="inputContainer">
      <a
        href="./public/document/cvjeremysaveries.pdf"
        download="cvjeremysaveries"
      >
        <button class="inputButton">telecharger mon cv</button>
      </a>

      <div class="flexLogo">
        <ul class="logoList">
          <li class="logoLinkedin">
            <a href="www.linkedin.com/in/jérémy-saveries">
              <i class="fa-brands fa-linkedin"></i></a
            >
          </li>
          <li class="logoGitHub">
            <a href="https://github.com/jeremysaveries"
              ><i class="fa-brands fa-github"></i></a
            >
          </li>
        </ul>
      </div>
    </div>
    <section>
      <h2 class="softskillTittle">mes compétences</h2>
      <Softskill />
    </section>

    <section>
      <div class="projets">
        <h2 class="projetTittle">mes projets</h2>
      </div>
    </section>

    <section>
      <div class="cardContainer">
        <CardWithModal
          imageSrc="./public/img/new logo.png"
          imageAlt="logo du projet"
          title="site petfoster connect"
          modalContent="Pet Foster Connect est un site fictif qui permet de mettre en relation des associations de protection animale avec des familles d'accueil. Il utilise Node.js, Express, Sequelize et PostgreSQL pour la gestion des données."
          modalLinkText="voir plus"
          modalLink="https://github.com/mon-projet/petfoster-connect"
        />
        <CardWithModal
          imageSrc="./public/img/gameCollection.png"
          imageAlt="logo d'un autre projet"
          title="game collection"
          modalContent="Game Collection est une application dédiée aux passionnés de jeux vidéo. Elle permet de gérer et suivre ses jeux, de marquer sa progression, et d'ajouter des jeux à une collection personnelle"
          modalLinkText="Voir plus"
          modalLink=""
        />
      </div>
    </section>
  </div>

  <section>
    <div class="contactForm">
      <h2 class="contactTitle">contactez moi</h2>
      <ContactForm />
    </div>
  </section>
</main>

<footer>
  <div class="footerContainer">
    <h3 class="footerTitle">by jeremy.</h3>
    <p>© jeremysaveriesdev.com. All rights reserved</p>
  </div>
</footer>

<style>
  @import url("../public/css/reset.css");
  @import url("../public/css/style.css");
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap");
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css");
  @import "@fortawesome/fontawesome-free/css/all.min.css";

  .cardContainer {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .modalContent {
    color: black;
  }
</style>
