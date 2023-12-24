import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";



describe('Pruebas en authReducer', () => {


  test('Debe retornar el estado por defecto', () => {

    const intialState = {
      logged: false,

    };

    const { logged } = authReducer(intialState, types.login);
    expect(logged).toBe(false);

  });

  test('Debe llamar al login auntenticar y establecer el user', () => {


    const intialState = {
      logged: false,

    };

    const action = {
      type: types.login,
      payload: "Ruben Seco"
    };

    const { user } = authReducer(intialState, action);
    expect(user).toBe(action.payload);

  });

  test('Debe llamar al login auntenticar y establecer el user', () => {

    const intialState = {
      logged: true,

    };
    const action = {
      type: types.logout,
      logged: false
    };

    const { logged } = authReducer(intialState, action);
    expect(logged).toBe(false);
  });
});