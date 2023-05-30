// Keep track of the current ID count
var currentId = 1;

// Constructor function for Food objects
function Food(foodId, foodName, type, price) {
    this.foodId = foodId;
    this.foodName = foodName;
    this.type = type;
    this.price = price;
}

// Method to render food information as a table row
Food.prototype.render = function() {
    var tbody = document.getElementById("food-table-body");

    // Create table row
    var row = document.createElement("tr");
    var idCell = document.createElement("td");
    idCell.textContent = this.foodId;
    var nameCell = document.createElement("td");
    nameCell.textContent = this.foodName;
    var typeCell = document.createElement("td");
    typeCell.textContent = this.type;
    var priceCell = document.createElement("td");
    priceCell.textContent = "$" + this.price;

    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(typeCell);
    row.appendChild(priceCell);
    tbody.appendChild(row);
};

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Get form inputs
    var foodName = document.getElementById("food-name").value;
    var foodType = document.getElementById("food-type").value;
    var foodPrice = document.getElementById("price").value;

    // Generate a unique food ID
    var foodId = currentId++;

    // Create a new Food instance
    var food = new Food(foodId, foodName, foodType, foodPrice);

    // Render the food information
    food.render();

    // Reset the form
    document.getElementById("food-form").reset();
}

// Add event listener to the form submit button
document.getElementById("submit-button").addEventListener("click", handleFormSubmit);
