function displayHoroscope(response) {
    new Typewriter("#horoscope", {
      strings: response.data.answer,
      autoStart: true,
      cursor: "",
    });
}

function generateHoroscope(event) {
    event.preventDefault();
    let instructionInput = document.querySelector("#user-instruction")
    let apiKey = "03a1od824e34f4b433a55ct759776fa6";
    let context = "You are a astrologist who writes short 4 line horoscopes, your mission is to generate a 4 line horoscope, separate each line with <br />. Always follow the user instructions";
    let prompt = `Tell me a horoscope for ${instructionInput.value}, please`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let horoscopeElement = document.querySelector("#horoscope");
    horoscopeElement.classList.remove("hidden");
    horoscopeElement.innerHTML = `<div class="generating"> ⏳ Generating your horoscope for ${instructionInput.value}...</div>`;

    axios.get(apiUrl).then(displayHoroscope);
}
 
  let horoscopeFormElement = document.querySelector("#horoscope-generator-form");
  horoscopeFormElement.addEventListener("submit", generateHoroscope);
  
  