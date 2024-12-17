<script>
  export let email = "saveriesj@gmail.com"; // Adresse e-mail par défaut
  export let buttonText = "Envoyer un email"; // Texte par défaut du bouton
  export let buttonClass =
    "bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"; // Classes CSS
</script>

<button
  class={buttonClass}
  on:click={() =>
    (window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)}
>
  {buttonText}
</button>
