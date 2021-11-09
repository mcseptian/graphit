import { getPage } from 'next-page-tester';
import { screen, fireEvent } from '@testing-library/react';

describe('List page', () => {
  it('renders client page', async () => {
    const { render } = await getPage({
      route: '/my-list'
    });

    render();

    expect(screen.getByText('reload')).toBeInTheDocument();

    fireEvent.click(screen.getByText('reload'));
    
    await screen.findByText('reload');
  });
});