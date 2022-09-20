import { screen, render } from '@testing-library/react'
import CatIndex from './CatIndex'


describe("<CatIndex/>", () =>{
    // A user can see the home page
    test("renders the home page and is viewable for the user", ()=>{
        // Arrange
        render(<CatIndex/>)
        // Act -
        const element = screen.getByText(/CatIndex/i)
        // Assert
        expect(element).toBeInTheDocument()
    })
})