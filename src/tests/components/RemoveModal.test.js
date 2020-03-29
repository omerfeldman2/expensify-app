import React from 'react';
import { shallow } from 'enzyme';
import RemoveModal from "../../components/RemoveModal";

let handleClearSelectedExpense, wrapper, handleRemoveExpense;

beforeEach(()=> {
    handleClearSelectedExpense = jest.fn();
    handleRemoveExpense = jest.fn();
    wrapper = shallow(<RemoveModal
        handleClearSelectedExpense={handleClearSelectedExpense}
        handleRemoveExpense={handleRemoveExpense}
    />)
});

test('should handleClearSelectedExpense if clicked button = No', () => {
    wrapper.find('#buttonNo').simulate('click');
    expect(handleClearSelectedExpense).toHaveBeenCalled();
});

test('should handleRemoveExpense if clicked button = Yes', () => {
    wrapper.find('#buttonYes').simulate('click');
    expect(handleRemoveExpense).toHaveBeenCalled();
});