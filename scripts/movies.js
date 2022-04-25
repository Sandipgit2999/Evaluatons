// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let s2 = JSON.parse(localStorage.getItem("amount"));

let h1 = document.getElementById("wallet");
h1.innerText = s2;

const url = "http://www.omdbapi.com/?apikey=2b79427&s=avenger";

function movie() {
  let search = document.getElementById("search").value;
  let res;
  let x = fetch(`http://www.omdbapi.com/?apikey=2b79427&s=${search}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      let data = res.Search;
      console.log(data);
      if (data != undefined) {
        append(data);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function append(data) {
  data.forEach(function (el) {
    let div = document.createElement("div");

    let p = document.createElement("p");
    p.innerText = el.Title;

    let image = document.createElement("img");
    image.src = el.Poster;

    let btn = document.createElement("button");
    btn.className = "book_now";
    btn.innerText = "Book now";
    btn.addEventListener('click',function(){
       window.open('checkout.html');
    })

    div.append(image, p, btn);

    document.getElementById("movies").append(div);
  });
}
