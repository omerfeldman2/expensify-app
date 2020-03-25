// Get visible expenses
import moment from "moment";

const sortByDate = (a, b) => {
    return a.createdAt <= b.createdAt ? 1 : -1
};
const sortByAmount = (a,b) => {
    return a.amount <= b.amount ? 1: -1
};

const sortExpenses = (expenses, sortBy) => {
    return  sortBy ==='date' ? expenses.sort((a,b) => sortByDate(a,b)) : expenses.sort((a,b) => sortByAmount(a,b));
};
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return sortExpenses(expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day'): true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }),sortBy);

};

