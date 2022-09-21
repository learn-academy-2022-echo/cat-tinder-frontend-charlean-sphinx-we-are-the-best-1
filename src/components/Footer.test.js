import { screen, render } from '@testing-library/react'
import Footer from './Footer'


describe("<Footer/>", () =>{
    // A user can see the home page
    test("renders the footer and is viewable for the user", ()=>{
        // Arrange
        render(<Footer/>)
        // Act -
        const element = screen.getByText(/Created by Luis Laurel & Clifford Roecker © 2022/i)
        // Assert
        expect(element).toBeInTheDocument()
    })
})