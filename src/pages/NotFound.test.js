import { screen, render } from '@testing-library/react'
import NotFound from './NotFound'


describe("<NotFound/>", () =>{
    // A user can see the home page
    test("renders the home page and is viewable for the user", ()=>{
        // Arrange
        render(<NotFound/>)
        // Act -
        const element = screen.getByText(/Missing Mummy/i)
        // Assert
        expect(element).toBeInTheDocument()
    })    
})


describe('image check', () => {
  test('imgae must have src = "photos/dempty.png" and alt="empty sarcophaugus"', () => {
    render(<NotFound/>);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', 'photos/dempty.png');
    expect(logo).toHaveAttribute('alt', 'empty sarcophaugus');
  });
});
