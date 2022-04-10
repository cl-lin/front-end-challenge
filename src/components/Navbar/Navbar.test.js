import React from "react";
import Navbar from "./Navbar";
import ReactDOM from 'react-dom'
import {render} from '@testing-library/react'

it("Navbar renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navbar />, div)
})

it("if NavbarMenu renders", () => {
    const {getByText} = render(<Navbar />);
    expect(getByText("Class")).toBeInTheDocument();
})