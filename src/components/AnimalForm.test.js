import React from "react";
import { render,screen, fireEvent } from "@testing-library/react";
import AnimalForm from "./AnimalForm";

test('AnimalForm adds new animals to the list', ()=>{
    render(<AnimalForm/>);
    //type into all three inputs 
    /*
        1. query for all inputs
        2. run the change event to add text
    */
    const speciesInput = screen.getByLabelText(/species/i);
    const ageInput = screen.getByLabelText(/age/i);
    const notesInput = screen.getByLabelText(/notes/i);

    //events with react testing library come with fireEvent
    fireEvent.change(speciesInput, {target:{value: 'Tiger'}});
    fireEvent.change(ageInput, {target:{value: 13}});
    fireEvent.change(notesInput, {target:{value:'Friendly'}});


    //click submit button
    /*
        1. query for the button
        2. run the click event on the button
     */
    const submitButton = screen.getByText(/submit/i);
    fireEvent.click(submitButton);

    //assert that the new animal is in the list 
    /*
        1. query for the new animal text
        2. assert that it is being rendered 
    */
    const newTiger = screen.getByText(/tiger/i);
    expect(newTiger).toBeInTheDocument();

    //could also do screen.getByText(/tiger/i) since it will fail if the text is not in the document so you don't need the full assertion if you don't want it

})
