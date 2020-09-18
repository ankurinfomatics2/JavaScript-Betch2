window.onload=function() {
    let buses = [];

    if (localStorage.getItem("buses") == null) {
        let stringbuses = JSON.stringify(buses); // convert JSON object into string
        localStorage.setItem("buses", stringbuses);
    }
};
    

showBusDetails();

function showBusDetails(superArray = 'undefined') {

    let buses;

    if (superArray == 'undefined'){
        let buses_JSON = localStorage.getItem("buses");  // 1. fetch all the JSON object of buses in the form of string
        buses = JSON.parse(buses_JSON);                  // 2. converts string to objects
    }
    else {
        buses = superArray;
    }

    // console.log(buses_JSON);
    // console.log(buses);

    let tableData = " ";
    let count = 1;

    buses.forEach(function(bus, index) {

        let currentRow = 
                        `<tr>
                            <td>${count}</td>
                            <td>${bus.name}</td>
                            <td>${bus.source}</td>
                            <td>${bus.destination}</td>
                            <td>${bus.number}</td>
                            <td>${bus.passenger_capacity}</td>
                            <td>
                                <button class="bus-button" type="submit" onclick="deleteBusRecord(${index})">delete</button>
                                <button class="bus-button" type="submit" onclick="showModel(${index})">update</button>
                            </td>
                        </tr>`;

        tableData += currentRow;
        count += 1;
    });

    document.getElementsByClassName("tdata")[0].innerHTML = tableData;


}


function addBusRecord(e) {

    e.preventDefault();
    // console.log(e);

    let bus_name   = document.getElementById("bname").value;
    let bus_source = document.getElementById("bsource").value;
    let bus_dest   = document.getElementById("bdestination").value;
    let bus_number = document.getElementById("bnumber").value;
    let bus_pass   = document.getElementById("bpassenger").value;


    let bus = {};

    bus.name                = bus_name;
    bus.source              = bus_source;
    bus.destination         = bus_dest;
    bus.number              = bus_number;
    bus.passenger_capacity  = Number(bus_pass);

    

    let buses_JSON = localStorage.getItem("buses");  // 1. fetch all the JSON object of buses in the form of string
    buses = JSON.parse(buses_JSON);                  // 2. converts string to objects
    
    buses.push(bus);

    let stringbuses = JSON.stringify(buses);    // 3. convert JSON object into string
    localStorage.setItem("buses", stringbuses); // 4. set the string i.e. changing existing array/dataset
    
    showBusDetails();

    document.getElementById('bname').value          = "";
    document.getElementById('bsource').value        = "";
    document.getElementById('bdestination').value   = "";
    document.getElementById('bnumber').value        = "";
    document.getElementById('bpassenger').value     = "";


}



function searchBusRecords() {

    let search_name     = document.getElementById('search').value;
    let search_source   = document.getElementById('search').value;
    let search_dest     = document.getElementById('search').value;
    let search_bnum     = document.getElementById('search').value;
    
    let buses_JSON = localStorage.getItem("buses");  // 1. fetch all the JSON object of buses in the form of string
    buses = JSON.parse(buses_JSON);                  // 2. converts string to objects
    
    let searchBox = buses.filter(function(bus){
        return (bus.name.indexOf(search_name) != -1) || (bus.source.indexOf(search_source) != -1) || (bus.destination.indexOf(search_dest) != -1) || (bus.number.indexOf(search_bnum) != -1);
    });

    showBusDetails(searchBox);
}


function deleteBusRecord(index) {

    let buses_JSON = localStorage.getItem("buses");  // 1. fetch all the JSON object of buses in the form of string
    buses = JSON.parse(buses_JSON);                  // 2. converts string to objects

    buses.splice(index, 1);         // a. Perform core DELETE operation
    
    
    let stringbuses = JSON.stringify(buses);    // 3. convert JSON object into string
    localStorage.setItem("buses", stringbuses); // 4. set the string
 
    showBusDetails();               // b. Display all the elements after DELETION

    
}

function showModel(index) {
    
    let model = document.getElementsByClassName('modal')[0];

        model.style.display = "block"; 

        copyBusRecord(index);
    
}



function hideModel(e) {

    if (e.target.className == 'modal') {
        let model = document.getElementsByClassName('modal')[0];

        model.style.display = "none"; 
    }
    
}

let updateIndex;                    // GLOBAL Variable

function copyBusRecord(index) {

    updateIndex = index;

    let buses_JSON = localStorage.getItem("buses");  // 1. fetch all the JSON object of buses in the form of string
    buses = JSON.parse(buses_JSON);                  // 2. converts string to objects
    
    
    let bus = buses[index];

    document.getElementById('mname').value = bus.name;
    document.getElementById('msource').value = bus.source;
    document.getElementById('mdestination').value = bus.destination;
    document.getElementById('mnumber').value = bus.number;
    document.getElementById('mpassenger').value = bus.passenger_capacity;
}



function updateBusRecord(e) {
    
    e.preventDefault();
    // console.log(e);

    let buses_JSON = localStorage.getItem("buses");  // 1. fetch all the JSON object of buses in the form of string
    buses = JSON.parse(buses_JSON);                  // 2. converts string to objects
    
    let bus = buses[updateIndex];

    let bus_name   = document.getElementById("mname").value;
    let bus_source = document.getElementById("msource").value;
    let bus_dest   = document.getElementById("mdestination").value;
    let bus_number = document.getElementById("mnumber").value;
    let bus_pass   = document.getElementById("mpassenger").value;

    
    bus.name                = bus_name;
    bus.source              = bus_source;
    bus.destination         = bus_dest;
    bus.number              = bus_number;
    bus.passenger_capacity  = Number(bus_pass);

    let stringbuses = JSON.stringify(buses);        // 3. convert JSON object into string
    localStorage.setItem("buses", stringbuses);     // 4. set the string i.e. changing existing array/dataset

    showBusDetails();                               // Show the update on Dashboard

    // hide the modal class
    let model = document.getElementsByClassName('modal')[0];
    model.style.display = "none"; 

}