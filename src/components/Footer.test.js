import { screen, render } from '@testing-library/react'
import Footer from './Footer'


describe("<Footer/>", () =>{
    // A user can see the home page
    test("renders the home page and is viewable for the user", ()=>{
        // Arrange
        render(<Footer/>)
        // Act -
        const element = screen.getByText(/Footer/i)
        // Assert
        expect(element).toBeInTheDocument()
    })
})