/*

Part One: DOM Manipulation with Vanilla JavaScript

Goal:

When a user clicks on the "#add-item" button, take the value from "#new-item" and append it as an "li" element to "#list"

Instructions:

1. Use "document.querySelector" to attach the ".onclick" method to "#add-item" - set this equal to "addNewItem"

2. Create a function named "addNewItem"; inside of this function, do the following:

3. Create a variable, "newItem", and assign this to the value inside of "#new-item".
Use "document.querySelector" to query for "#new-item" and the ".value" method to get this node's value

4. Create a variable, "newListItem", and assign this value to "document.createElement('li)"

5. Next, set the ".innerHTML" of this newly created node to "newItem":
newListItem.innerHTML = newItem

6. Use "document.querySelector" to search for "#list" and use ".appendChild(" to append "newListItem" as a child of "#list"

7: Bonus: After the new item is added to the list, clear the value inside "#new-item".
Hint: the "value" property of an empty input box is an empty string: ""

8: Bonus: If the user attempts to add an empty list item, prevent them from doing so,
and alert the user with using the "alert" method

*/

//document.querySelector('#add-item').onclick = addNewItem

//function addNewItem() {
//	console.log('test')
//	// 1. garb value of input from HTML
//	var newItem = document.querySelector('#new-item').value
//	console.log(newItem)
	// 2. create a new <li> element
//	var newListItem = document.createElement('li')
	// 3. set the new element's innerHTML to the user's input
//	newListItem.innerHTML = newItem
	// 4. append the new <li> to the <ul>
//	document.querySelector('#list').appendChild(newListItem)
//}

/*

Part Two: DOM Manipulation with jQuery

BE SURE YOU HAVE COMMENTED OUT THE ABOVE CODE BEFORE STARTING PART TWO!

Instructions:

1. Use jQuery's CSS Selector to query for "#add-item" - then use ".click(addNewItem)" to attach a click handler to this element.

2. Write a function, "addNewItem"; inside of this function, do the following:

3. Create a variable, "newItem", and assign this to the value inside of "#new-item".
Use jQuery's CSS Selector to query for "#new-item" and use the ".val()" method to retrieve its value

4. Use the ".append()" method to add "newItem" to to "#list".
Hint: You can append HTML strings (ex: "<li>...</li>") using this method.

5. Be sure to attempt the above bonuses as well.

*/

$('#add-item').click(addNewItem)
console.log('test')
function addNewItem() {
	var newItem = $('#new-item').val()
	console.log(newItem)
	$('#list').append('<li>' + newItem + '</li>')
	$('#new-item')
	.val('')
	.focus()
}

$(document).on('click', 'li', function () {
console.log('test') 
	$(this).remove()
})