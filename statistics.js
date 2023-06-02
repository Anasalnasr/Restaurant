// Function to handle form submission
document.getElementById('1food-form').addEventListener('submit', (e) => {
  e.preventDefault();
  var foodName = document.getElementById('1name').value;
  var foodType = document.getElementById('1type').value;
  var foodPrice = document.getElementById('1price').value;

  // Create a new food object
  var newFood = {
    name: foodName,
    type: foodType,
    price: foodPrice
  };

  console.log(newFood);

  // Save the food data to local storage
  var foodData = JSON.parse(localStorage.getItem('foodData')) || [];
  foodData.push(newFood);
  localStorage.setItem('foodData', JSON.stringify(foodData));

  // Reset the form
  document.getElementById('food-form').reset();

  // Render the table
  renderTable();

  console.log('Form');
});

function handleSubmit(event) {
  event.preventDefault();

  // Get form values
  var foodName = document.getElementById('food-name').value;
  var foodType = document.getElementById('food-type').value;
  var foodPrice = document.getElementById('price').value;

  // Create a new food object
  var newFood = {
    name: foodName,
    type: foodType,
    price: foodPrice
  };

  console.log(newFood);

  // Save the food data to local storage
  var foodData = JSON.parse(localStorage.getItem('foodData')) || [];
  foodData.push(newFood);
  localStorage.setItem('foodData', JSON.stringify(foodData));

  // Reset the form
  document.getElementById('food-form').reset();

  // Render the table
  renderTable();
}

// Function to render the table rows
function renderTable() {
  var tableBody = document.getElementById('food-table-body');
  tableBody.innerHTML = '';

  // Retrieve the food data from local storage
  var data = JSON.parse(localStorage.getItem('foodData')) || [];

  // Loop through the food data and create table rows
  for (var i = 0; i < data.length; i++) {
    var food = data[i];
    var row = document.createElement('tr');

    // Create and append table cells
    var idCell = document.createElement('td');
    idCell.textContent = i + 1;
    row.appendChild(idCell);

    var nameCell = document.createElement('td');
    nameCell.textContent = food.name;
    row.appendChild(nameCell);

    var typeCell = document.createElement('td');
    typeCell.textContent = food.type;
    row.appendChild(typeCell);

    var priceCell = document.createElement('td');
    priceCell.textContent = food.price;
    row.appendChild(priceCell);

    tableBody.appendChild(row);
  }
}

// Call the renderTable function when the page finishes loading
document.addEventListener('DOMContentLoaded', function() {
  renderTable();
});
