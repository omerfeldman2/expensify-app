import authReducer from '../../reducers/auth';

test('Should setup login action', () => {
     const action = {
         type: 'LOGIN',
         uid: '123abc'
     };
     const state = authReducer(undefined, action);
     expect(state.uid).toBe(action.uid);
});

test('Should setup logout action', () => {
    const action = {
        type: 'LOGIN'
    };
    const state = authReducer({uid:'123abc'}, action);
    expect(state.uid).toBe(undefined);
});