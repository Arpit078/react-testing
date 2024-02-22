# About Tests.
Three tests are written for three components 1 for each. All the tests are in the same directory as of the
component.
## main.test.js -> Test if a user can write 10,000 todos.
1. Unit test.
2. Tests if the webpage is able to handle 10,000 and more to do items.
## item.test.js ->Test if cross button when clicked removes the item from the dom.
1. Unit test.
2. Tests if the delete button is functioning properly.
3. It is written with the thought in mind that while editing the item component, The programmer may break the delete todo function.
## input.test.js -> Test if the input element is accepting text and onSubmit function is working properly.
1. Unit test
2. It tests if the input box is able to accept text input.
3. It is written with the thought in mind that while editing the input component, The programmer may disable the text input functionality or break the submit functionality. 
## To run tests
```
npm run test
```
