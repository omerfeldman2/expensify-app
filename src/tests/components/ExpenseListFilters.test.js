import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters} from "../../components/ExpenseListFilters";
import {filters, altfilters} from "../fixtures/filters";
import moment from "moment";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
   setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />)
});


test('Should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
test('Should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({filters: altfilters});
    expect(wrapper).toMatchSnapshot();
});
test('Should handle text change', () => {
    const value = 'testing';
    wrapper.find('input').simulate('change',{
        target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});
test('Should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: {altfilters}
    });
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled();
});
test('Should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});
test('Should handle Date changes', () => {
    const startDate = moment(0).subtract(3,'days');
    const endDate = moment(0);
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
test('Should handle date focus changes', () => {
    const value = true;
    wrapper.find('DateRangePicker').prop('onFocusChange')(true);
    expect(wrapper.state('calendarFocused')).toBe(value);
});


