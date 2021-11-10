// __tests__/my-list.test.jsx

import { getPage } from 'next-page-tester';
import { screen, act, fireEvent } from '@testing-library/react';

describe('My List page', () => {
  it('renders client page', async () => {
    const router = await getPage({
      route: '/my-list',
      pathname: '/my-list',
      useApp: true
    });

    router.render();
    
    expect(screen.getByText('reload')).toBeInTheDocument();

    act(() => {
      fireEvent.click(screen.getByText('reload'));
    })
    
    await screen.findByText('reload');

  });
});