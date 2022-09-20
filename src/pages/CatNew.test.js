import { screen, render } from '@testing-library/react'
import CatNew from './CatNew'


describe("<CatNew/>", () =>{
    // A user can see the home page
    test("renders the home page and is viewable for the user", ()=>{
        // Arrange
        render(<CatNew/>)
        // Act -
        const element = screen.getByText(/CatNew/i)
        // Assert
        expect(element).toBeInTheDocument()
    })
})