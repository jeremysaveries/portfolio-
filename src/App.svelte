<script>
  import CardWithModal from "./components/cardWithModel.svelte"; // Assurez-vous que le chemin est correct
  import EmailButton from "./components/mailModel.svelte";
</script>

<header>
  <div class="headerContainer">
    <ul class="titleHeader">
      <li class="firstName">jeremy</li>
      <li class="lastName">saveries</li>
    </ul>
    <nav>
      <ul class="navBar">
        <li><a href="Home.html">accueil</a></li>
        <li><a href="Portfolio.html">mes projets</a></li>
        <li><a href="Contact.html">Contact</a></li>
      </ul>
    </nav>
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
          Bonjour, je m'appelle Jérémy. Développeur full-stack JavaScript, je
          suis également en formation en design web. Si mon profil vous
          intéresse, n'hésitez pas à télécharger mon CV et à me contacter pour
          échanger davantage.
        </p>
      </div>

      <div class="photoProfil">
        <img
          class="photo"
          src="../public/img/photoprofil.jpg"
          alt="photo de profil"
        />
      </div>
    </div>

    <div class="inputContainer">
      <button class="inputButton">telecharger mon cv</button>
    </div>

    <div class="flexLogo">
      <ul class="logoList">
        <li class="logoLinkedin">
          <i class="bi bi-linkedin"></i>
          <a href=""></a>
        </li>
        <li class="logoGitHub">
          <a href=""><i class="bi bi-github"></i></a>
        </li>
      </ul>
    </div>

    <section>
      <div class="projets">
        <div class="devProjet">
          <h2 class="projetTittle">mes projets</h2>
        </div>
      </div>
    </section>

    <section>
      <div class="cardContainer">
        <CardWithModal
          imageSrc="../public/img/new logo.png"
          imageAlt="logo du projet"
          title="site petfoster-connect"
          modalContent="Pet Foster Connect est un site fictif qui permet de mettre en relation des associations de protection animale avec des familles d'accueil. Il utilise Node.js, Express, Sequelize et PostgreSQL pour la gestion des données."
          modalLinkText="voir plus"
          modalLink="https://github.com/mon-projet/petfoster-connect"
        />
        <CardWithModal
          imageSrc="../public/img/new logo.png"
          imageAlt="logo d'un autre projet"
          title="autre projet"
          modalContent="Voici des détails sur un autre projet passionnant."
          modalLinkText="Voir plus"
          modalLink="https://github.com/mon-projet/petfoster-connect"
        />
      </div>
    </section>
  </div>

  <section>
    <div class="contactForm">
      <h2 class="contactTitle">contact</h2>
      <div class="mailcontainer">
        <p><i class="bi bi-envelope"></i>email</p>
        <EmailButton
          email="saveriesj@gmail.com"
          buttonText="envoyez un mail "
          buttonClass="bg-green-500 text-white py-3 px-5 rounded-lg hover:bg-green-600"
        />
      </div>
    </div>
  </section>
</main>

<style>
  @import url("../public/css/reset.css");
  @import url("../public/css/style.css");
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css");
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap");

  .cardContainer {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .modalContent {
    color: black;
  }
</style>
