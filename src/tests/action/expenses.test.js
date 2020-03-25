import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
       type: 'REMOVE_EXPENSE',
       id: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'new note value'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates: {
            note: 'new note value'
        }
    });
});

test('Should setup add expense action object with provided value', () => {
    const expenseData =  {
        description: 'rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
});

test('Should setup add expense action object with default value', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});