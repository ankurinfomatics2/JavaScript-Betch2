let employees = [
    {
        name: "Ankur Agarwal",
        age: 36,
        city: "Gurgaon",
        salary: "2,00,000",
    },

    {
        name: "Manoj Mathur",
        age: 21,
        city: "Bangalore",
        salary: "1,00,000",
    },

    {
        name: "Anuj Sharma",
        age: 33,
        city: "Delhi",
        salary: "1,80,000",
    },

    {
        name: "Ravi Mehra",
        age: 38,
        city: "Mumbai",
        salary: "2,15,000",
    },

    {
        name: "Sanjay Verma",
        age: 29,
        city: "Chandigarh",
        salary: "1,40,000",
    },

];

// Display all the records of employee, by calling the function 
employee_detail_show(employees);


function employee_detail_show (employees) {

    let count = 1;
    let tabledata = "";

    employees.forEach(function(employee, index) {

        let currentrow = 
                        `<tr>
                            <td>${count}</td>
                            <td>${employee.name}</td>
                            <td>${employee.age}</td>
                            <td>${employee.city}</td>
                            <td>${employee.salary}</td>
                            <td>
                                <button class="button" onclick="delete_record(${index})">delete</button>
                            </td>
                        </tr>`;
        
        tabledata += currentrow;
        count += 1;
        
    });
    
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}


function search_by_name_and_city() {

    
    let search_name = document.getElementById("search-name-city").value;
    let search_city = document.getElementById("search-name-city").value;
    

    let searchNameCity = employees.filter(function(emp){
        return (emp.name.indexOf(search_name) != -1) ||  (emp.city.indexOf(search_city) != -1); 
    });

    // console.log(searchNameCity);
    employee_detail_show(searchNameCity);

}

function delete_record(index) {
    
    employees.splice(index, 1)

    employee_detail_show(employees);


}




