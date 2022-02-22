
window.addEventListener('load', onLoad);


function onLoad(event) {
    console.log('Connection opened');
    getInfo();
}


function getInfo() {
    setTimeout(getInfo, 3000);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var jsondata = JSON.parse(xmlHttp.responseText);
            console.log(jsondata);

            document.getElementById("InfoWiFi").innerHTML = jsondata["WiFi_IP"][0] + "," + jsondata["WiFi_IP"][1] + "," + jsondata["WiFi_IP"][2] + "," + jsondata["WiFi_IP"][3];
            document.getElementById("InfoEth").innerHTML = jsondata["Eth_IP"][0] + "," + jsondata["Eth_IP"][1] + "," + jsondata["Eth_IP"][2] + "," + jsondata["Eth_IP"][3];

            document.getElementById("InfoWiFi").innerHTML = jsondata["WiFi_IP"][0] + "," + jsondata["WiFi_IP"][1] + "," + jsondata["WiFi_IP"][2] + "," + jsondata["WiFi_IP"][3];
            document.getElementById("InfoEth").innerHTML = jsondata["Eth_IP"][0] + "," + jsondata["Eth_IP"][1] + "," + jsondata["Eth_IP"][2] + "," + jsondata["Eth_IP"][3];

        }
    }
    xmlHttp.open("GET", "/getInfo", true); 
    xmlHttp.send(null);
}