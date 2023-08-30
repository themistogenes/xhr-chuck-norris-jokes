const btn = document.getElementById('joke-btn');
const joke = document.getElementById('joke');

function getJoke() {

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function() {
    console.log(this.readyState);
    console.log(this.status);
    if (this.readyState === 4 && this.status === 200) {
      console.log(JSON.parse(this.responseText));
      const data = JSON.parse(this.responseText);
      joke.innerHTML = data.value;
    } else {
      joke.innerHTML = `Could not get another joke...`
    }
  }

  xhr.send();

}

btn.addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded', getJoke);