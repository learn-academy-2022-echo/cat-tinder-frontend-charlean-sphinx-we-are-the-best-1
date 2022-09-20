// import { screen, render } from '@testing-library/react'
// import Header from './Header'
// // import  userEvent  from '@testing-library/user-event'
// // import BrowseRrouter from "react-router-dom"
// // describe("", () =>{
// //     test("", ()=>{
// //         espect()
// //     })
// // })

// describe("<Header/>", () =>{
//     // A user can see the Header page
//     test("Header renders without error", ()=>{
//         // Arrange
//         render(<Header/>)

//         // Act -
//         const heading = screen.getByText(/Mummy Tinder/i)

//         // Action 2 is actually an action and an assertion
//         // userEvent.click(indexLink)

//         // Assert
//         expect(heading).toBeInTheDocument()
//     })
// })

// may need to add user interactions

// may need to add browser router
// import BrowseRrouter
//         // Arrange
// render(
//     <BrowserRouter>
//        <Header/>
//     </BrowserRouter>
//     )

import { screen, render } from '@testing-library/react'
import Header from './Header'


describe("<Header/>", () =>{
    test("Header renders without error", ()=>{
        // Arrange
        render(<Header/>)
        // Act -
        const heading = screen.getByText(/Mummy Tinder/i)
        // Assert
        expect(heading).toBeInTheDocument()
    })
})
