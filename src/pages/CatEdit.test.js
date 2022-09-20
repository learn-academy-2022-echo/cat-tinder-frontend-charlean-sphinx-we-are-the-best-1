import { screen, render } from '@testing-library/react'
import CatEdit from './CatEdit'


describe("<CatEdit/>", () =>{
    // A user can see the home page
    test("renders the home page and is viewable for the user", ()=>{
        // Arrange
        render(<CatEdit/>)
        // Act -
        const element = screen.getByText(/CatEdit/i)
        // Assert
        expect(element).toBeInTheDocument()
    })
})