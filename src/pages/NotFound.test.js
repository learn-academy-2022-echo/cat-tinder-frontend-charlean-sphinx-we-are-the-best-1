import { screen, render } from '@testing-library/react'
import NotFound from './NotFound'


describe("<NotFound/>", () =>{
    // A user can see the home page
    test("renders the home page and is viewable for the user", ()=>{
        // Arrange
        render(<NotFound/>)
        // Act -
        const element = screen.getByText(/NotFound/i)
        // Assert
        expect(element).toBeInTheDocument()
    })
})
