import { screen, render } from '@testing-library/react'
import Home from './Home'


describe("<Home/>", () =>{

    test("renders the home page and is viewable for the user", ()=>{

        render(<Home/>)
   
        const element = screen.getByText(/Home/i)
      
        expect(element).toBeInTheDocument()
    })
})

\