import { screen, render } from '@testing-library/react'
import Home from './Home'

// describe("", () =>{
//     test("", ()=>{
//         espect()
//     })
// })

describe("<Home/>", () =>{
    // A user can see the home page
    test("renders the home page and is viewable for the user", ()=>{
        // Arrange
        render(<Home/>)
        // Act -
            //  can be interactions like clicking, 
            // can also be passive actions like seeing something
        const element = screen.getByText(/Home/i)
        // Assert
        expect(element).toBeInTheDocument()
    })
})

// getByText- special testing library thing
// always lookup regx when using it