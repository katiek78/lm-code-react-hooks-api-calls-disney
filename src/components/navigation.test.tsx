import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from "./navigation";

test('renders Show Favourites button when component is rendered with displayFavourites set to false', () => {
    render(<Navigation currentPage={0} setCurrentPage={jest.fn()} displayingFavourites={false} setDisplayFavourites={jest.fn()} />);
    const buttonElement = screen.getByText(/Show Favourites/i, { selector: "button" });
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders Show All button when component is rendered with displayFavourites set to true', () => {
    render(<Navigation currentPage={0} setCurrentPage={jest.fn()} displayingFavourites={true} setDisplayFavourites={jest.fn()} />);
    const buttonElement = screen.getByText(/Show All/i, { selector: "button" });
    expect(buttonElement).toBeInTheDocument();
  });

test('Show Favourites button click calls toggleDisplayFavourites', () => {
    const mockToggleDisplayFavourites = jest.fn();    
    render(<Navigation currentPage={0} setCurrentPage={jest.fn()}  displayingFavourites={false} setDisplayFavourites={mockToggleDisplayFavourites} />);        

    const clickedButtonElement = screen.getByText(/Show Favourites/i, { selector: "button" });
    fireEvent.click(clickedButtonElement);           
    expect(mockToggleDisplayFavourites).toHaveBeenCalledTimes(1);
  });

  //NOTE: Having difficulty testing whether button text changes! Tried 3 different ways
  //Ultimately don't know how to call setDisplayFavourites as it's passed down via props

// test('displayFavourites is changed via toggleDisplayFavourites', () => {
//     render(<Navigation currentPage={0} setCurrentPage={jest.fn()}  displayingFavourites={false} setDisplayFavourites={jest.fn()} />);            
//     const buttonElement = screen.getByText(/Show Favourites/i, { selector: "button" });
//     fireEvent.click(buttonElement);
//     expect(displayingFavourites).toBeTruthy();
// });

// test('displayFavourites is changed via toggleDisplayFavourites', () => {
//     const { container } = render(<Navigation currentPage={0} setCurrentPage={jest.fn()}  displayingFavourites={false} setDisplayFavourites={jest.fn()} />);            
// const displayFavourites = false;
    // container.toggleDisplayFavourites();
    // expect(displayFavourites).toBeTruthy();
// });

// test('toggles between Show Favourites and Show All', () => {
//     render(<Navigation currentPage={0} setCurrentPage={jest.fn()}  displayingFavourites={false} setDisplayFavourites={jest.fn()} />);        

//     //after one click, Show All is displayed
//     const buttonElement = screen.getByText(/Show Favourites/i, { selector: "button" });
//     fireEvent.click(buttonElement);             
//     //expect(screen.queryByText(/Show Favourites/i, { selector: "button" })).not.toBeInTheDocument();    
//     expect(screen.getByText(/Show All/i, { selector: "button" })).toBeInTheDocument();

//     //after two clicks, Show Favourites is displayed again
//     const clickedButtonElement = screen.getByText(/Show All/i, { selector: "button" });
//     fireEvent.click(clickedButtonElement);           
//     expect(screen.getByText(/Show Favourites/i, { selector: "button" })).toBeInTheDocument();    
//     expect(screen.queryByText(/Show All/i, { selector: "button" })).not.toBeInTheDocument();
//   });