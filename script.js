let ipIn = document.querySelector("#searchInput")
let subButton = document.querySelector("#goButton")
let ipAddressOut = document.querySelector("#result1 h2")
let locationOut = document.querySelector("#result2 h2")
let timezoneOut = document.querySelector("#result3 h2")
let ispOut = document.querySelector("#result4 h2")



const getLocation = async(ip) => {
    const res = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_BH68ACXzteSjksNqGt0OsdVUNtSx1&ipAddress=${ip}`)
    console.log(res.data)
    ipAddressOut.innerText = ip
    locationOut.innerText = res.data.location.region
    timezoneOut.innerText = res.data.location.timezone
    ispOut.innerText = res.data.isp
}

    
subButton.addEventListener("click", function(){
    getLocation(ipIn.value)
})


var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();