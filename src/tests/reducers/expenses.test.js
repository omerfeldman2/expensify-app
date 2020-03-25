import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test('Should set default state', () => {
    const state = expensesReducer(undefined,{type: '@@INIT'});
    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
   const action = {
       type: 'REMOVE_EXPENSE',
       id: expenses[1].id
   };
   const state = expensesReducer(expenses,action);
   expect(state).toEqual([expenses[0],expenses[2]]);
});
test('Should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});
test('Should add an expense', () => {
   const expense = {
       description: 'testing expense',
       note: 'test',
       amount: 0,
       createdAt: 0
   };
   const action = {
       type: 'ADD_EXPENSE',
       expense
   };
   const state = expensesReducer(expenses,action);
   expect(state).toEqual(expenses.concat(expense));
});
test('Should edit and expense', () => {
    const updates = {
        description:'id of 3 description',

    };
    const action = {
        type: 'EDIT_EXPENSE',
        id:expenses[2].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state[2].description).toBe(updates.description);
});
test('Should not edit and expense if id not found', () => {
    const updates = {
        description:'id of 3 description',
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id:'-1',
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});