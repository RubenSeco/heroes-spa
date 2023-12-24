import { render, screen } from '@testing-library/react';
import { AppRouter } from '../../src/router/AppRouter';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';

describe('Pruebas en AppRouter', () => {
  test('Debe mostrar el login si no está autenticado', () => {
    const contextValue = {
      logged: false
    };

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Login').length).toBe(2);
  });

  test('Debe mostrar que el componente de Marvel está autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        id: '132',
        name: 'Ruben'
      }
    };

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
  });
});
