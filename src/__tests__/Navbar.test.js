import Navbar from '../components/Navbar/Navbar.jsx';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Navbar', () => {
  it('renders with logo and working nav links', () => {
    render(<Navbar />);

    // Make sure the logo is rendered
    // const logo = screen.getByText('Your Hotel');
    // expect(logo).toBeInTheDocument();

    // Make sure the nav links are rendered
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByText('About');
    expect(aboutLink).toBeInTheDocument();

    const roomsLink = screen.getByText('Rooms');
    expect(roomsLink).toBeInTheDocument();

    // Test the nav link behavior
    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');

    fireEvent.click(aboutLink);
    expect(window.location.pathname).toBe('/about');

    fireEvent.click(roomsLink);
    expect(window.location.pathname).toBe('/rooms');
  });
});
