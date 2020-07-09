import React from "react";
import { render,screen, getByTestId, getByText } from "@testing-library/react"; //render components in a virtual DOM
import App from "./App";

//jest global functions to write tests 
// test() used to run a test 
//Jest is going to be the test runner (command line interface)

// test('title', cbToRunTheTest)
test('renders App component without errors', () => {
    render(<App />);

    //tests will fail if an error is thrown from any function or component inside the test callback 

})

//query the virtual dom for an element and make an "assertion" about that element
test('App renders the form header', () => {
    //Arrange
    render(<App />);

    //Act
    //query for the header element
    // regex string with i following to get case insensitive 
    const header = screen.getByText(/add new animal/i)

    //Assert 
    //make an assertion
    expect(header).toBeInTheDocument()
})