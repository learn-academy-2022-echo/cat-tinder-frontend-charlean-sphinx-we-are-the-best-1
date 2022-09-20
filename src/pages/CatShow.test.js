import { screen, render } from '@testing-library/react'
import CatShow from './CatShow'


describe("<CatShow/>", () =>{
    // A user can see the home page
    test("renders the home page and is viewable for the user", ()=>{
        // Arrange
        render(<CatShow/>)
        // Act -
        const element = screen.getByText(/CatShow/i)
        // Assert
        expect(element).toBeInTheDocument()
    })
})