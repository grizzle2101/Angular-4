//Task 1 - Demonstrating String Functions
var message = 'abc';
var lastChar = message.endsWith('c');
//Task 2 - Breaking IntelliSense Types:
var newMessage;
newMessage = 'abc';
var finalChar = newMessage.endsWith('c'); //We Lose All String Functions
//Task 3 - Use Type Assertions to Fix:
var endsWithC = newMessage.endsWith('c');
var alternativeWay = newMessage.endsWith('c');
