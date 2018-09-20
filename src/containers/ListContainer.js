import { connect } from 'react-redux';

import { deleteTodo, toggleTodo, editTodo } from '../actions/todo';
import List from '../components/List';

import {getFilteredTodos} from "../reducers";


function mapStateToProps(state) {
    return {
        todos: getFilteredTodos(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: id => dispatch(deleteTodo(id)),
        onToggle: id => dispatch(toggleTodo(id)),
        onEdit: (id, title) => dispatch(editTodo(id, title))
    };
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;