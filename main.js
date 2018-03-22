var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];  

    // planets.reverse();  
// We're going to solve this by breaking the problem into three parts.
// Programmers like automating things, we'll populate the HTML drop down options using code,
// instead of having to type out all the values.
// Create a function that does the some math and gives us the new weight.
// Then create a function that responds when the user clicks on the button.

// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`

planets.forEach(function(value) {
    var objSelect = document.getElementById('planets');
    var objOption = document.createElement('option');
    objOption.value = value[0];
    objOption.text = value[0];
    objSelect.appendChild(objOption);
    //$('#planets').append($('<option></option>').val(value[0]).html(value[0]));
});     

function calculateWeight (userWeight, planetName) {
  // 2. Write the code to return the correct weight
  //return userWeight * planets.find(function(item){ return item[0] == planetName; })[1];
  var objFound = planets.find(function(item) { return item[0] == planetName;} );
  return userWeight * objFound[1];
}

  // 3. Create a variable called userWeight and assign the value of the user's weight.
  // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
  // 5. Create a variable called result and assign the value of the new calculated weight.
  // 6. Write code to display the message shown in the screenshot.
// 7. Set the calculate-weight button's onclick method to use the handleClickEvent function.
// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.
// 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)


$('#calculate-button').click(function() {
    var userWeight = parseFloat( $("#user-weight").val()); 
    var planetName = $("#planets option:selected").html()
    var result = calculateWeight (userWeight, planetName)
    $("#output").html("If you were on " + planetName + ", you would weigh " + result + "lbs!")
}); 
