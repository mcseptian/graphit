// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

 import { getPage } from 'next-page-tester';
 import { screen, fireEvent } from '@testing-library/react';
 
 describe('Blog page', () => {
   it('renders blog page', async () => {
     const { render } = await getPage({
       route: '/',
     });
 
     render();
     expect(screen.getByText(`This page show a list of Pokemons’ names and the owned total. Click on the list item to see Pokemon Detail`)).toBeInTheDocument();
 
     fireEvent.click(screen.getByText('1'));
     await screen.findByText(`This page show a picture of the Pokemon with its moves and types. There
     is a button to catch the Pokemon, you can give the Pokemon a nickname
     and add to your to My Pokemon List. You can catch the same pokemon
     multiple times but need to give a different nickname for each pokemon.`);
   });
 });