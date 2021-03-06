import React from "react";
import { connect } from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import {startEditExpense, startRemoveExpense} from '../actions/expenses';
import RemoveModal from "./RemoveModal";

export class EditExpensePage extends React.Component {
    state = {
        selectedExpense: false
    };
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id,expense);
        this.props.history.push("/");
    };
    onRemove = () => {
        this.props.startRemoveExpense({id: this.props.expense.id});
        this.props.history.push("/");
    };
    handleClearSelectedExpense = () => {
        this.setState({
            selectedExpense: false
        });
    };
    handlePopModal = () => {
        this.setState({
            selectedExpense: true
        })
    };

    render() {
        return (
            <div>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className='content-container'>
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button onClick={this.handlePopModal} className="button button--secondary">Remove Expense</button>
                    <RemoveModal
                        selectedExpense={this.state.selectedExpense}
                        handleClearSelectedExpense={this.handleClearSelectedExpense}
                        handleRemoveExpe nse={this.onRemove}
                    />
                </div>

            </div>
        );
    }
}
const mapDispatchToProps = (dispatch,props) => ({
    startEditExpense: (id,expense) => dispatch(startEditExpense(id,expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

const mapStateToProps = (state,props) => ({
            expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);