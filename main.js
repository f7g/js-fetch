var apiKey = "ef909b5b39be1128e87f50d512aff03e";
var apiURL = "https://api.openweathermap.org/data/2.5/onecall?";
var query = "units=metric&lat=8.0912&lon=111.9642&appid=" + apiKey;
var url = apiURL + query;

var _data;

// Mengisi variable data diatas
function getData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      var suhu = data.current.temp;
      gambarSuhuDariApiKeHTML(suhu);
    });
}

function gambarSuhuDariApiKeHTML(nilaiSuhu) {
  var el = document.getElementById("container");
  el.innerHTML = nilaiSuhu + " Celcius";
}

getData();
