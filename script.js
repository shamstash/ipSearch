let ipIn = document.querySelector("#searchInput");
let subButton = document.querySelector("#goButton");
let ipAddressOut = document.querySelector("#result1 h2");
let locationOut = document.querySelector("#result2 h2");
let timezoneOut = document.querySelector("#result3 h2");
let ispOut = document.querySelector("#result4 h2");
let allRes = document.querySelector("#allResults");

const getLocation = async (ip) => {
  const res = await axios.get(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_BH68ACXzteSjksNqGt0OsdVUNtSx1&ipAddress=${ip}`
  );
  console.log(res.data);
  ipAddressOut.innerText = ip;
  locationOut.innerText = res.data.location.region;
  timezoneOut.innerText = res.data.location.timezone;
  ispOut.innerText = res.data.isp;

  mapfunc(
    res.data.location.lng,
    res.data.location.lat,
    (locationOut.innerText = res.data.location.region)
  );
  console.log(res.data.location.lng, res.data.location.lat);
};

subButton.addEventListener("click", function () {
  getLocation(ipIn.value).then(function () {
    allRes.style.opacity = 1;
  });
});

var map;

function mapfunc(long, lat, popupnz) {
  if (map) {
    map.off();
    map.remove();
  }

  map = L.map("map", { zoomControl: false }).setView([lat, long], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([lat, long]).addTo(map).bindPopup(popupnz).openPopup();
}
