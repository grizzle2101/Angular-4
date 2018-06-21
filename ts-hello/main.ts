
//Task 1 - Demonstrating String Functions
let message = 'abc';
let lastChar = message.endsWith('c');


//Task 2 - Breaking IntelliSense Types:
let newMessage;
newMessage = 'abc'
let finalChar = newMessage.endsWith('c'); //We Lose All String Functions

//Task 3 - Use Type Assertions to Fix:
let endsWithC = (<string>newMessage).endsWith('c');
let alternativeWay = (newMessage as string).endsWith('c');