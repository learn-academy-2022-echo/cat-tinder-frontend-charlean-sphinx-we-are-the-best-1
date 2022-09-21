import { screen, render } from '@testing-library/react'
import Header from './Header'


describe("<Header/>", () =>{
    // A user can see the home page
    test("renders the home page and is viewable for the user", ()=>{
        // Arrange
        render(<Header/>)
        // Act -
        const element = screen.getByText(/Mummy Tinder/i)
        // Assert
        expect(element).toBeInTheDocument()
    })
})