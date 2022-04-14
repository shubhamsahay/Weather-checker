//src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
function getData() {
    let city = document.getElementById("city").value;
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5881c4a70f1f474bc5289105d70aa1b5`;
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        append(res);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  
  function getDataLocation(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5881c4a70f1f474bc5289105d70aa1b5`;
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        append(res);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  
  function append(data) {
    let container = document.getElementById("container");
    let map = document.getElementById("gmap_canvas");
    container.innerHTML = null;
  
    let city = document.createElement("p");
    city.innerText = `City: ${data.name}`;
  
    let min = document.createElement("p");
 
    min.innerText = `Min temp: ${   Math.floor((data.main.temp_min)-274.15)}\u00B0`;
  
    let max = document.createElement("p");
    max.innerText = `Max temp: ${  Math.floor((data.main.temp_max)-274.15)}\u00B0`;
  
    let current = document.createElement("p");
    current.innerText = `Current Temp: ${ Math.floor((data.main.temp)-274.15 )}\u00B0`;
  
    let humidity = document.createElement("p");
    humidity.innerText = `Humidity: ${data.main.humidity}`;
  
    container.append(city, min, max, current, humidity);
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  }
  
  function getWeather() {
    navigator.geolocation.getCurrentPosition(success);
  
    function success(position) {
      let crd = position.coords;
  
      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
  
      getDataLocation(crd.latitude, crd.longitude);
    }
  }