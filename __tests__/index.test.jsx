// __tests__/index.test.jsx

import { getPage } from 'next-page-tester';
import { screen, act, fireEvent } from '@testing-library/react';

describe('Index page', () => {
  it('renders index page', async () => {
    const { render } = await getPage({
      route: '/',
    });

    render();

    expect(screen.getByTestId("infoBox")).toBeInTheDocument();

    act(() => {
      fireEvent.click(screen.getByTestId('infoBoxCloseButton'));
    })

    await expect(screen.queryByText("This page show a list of Pokemons' names and the owned total. Click on the list item to see Pokemon Detail")).toBeNull()
  });
});