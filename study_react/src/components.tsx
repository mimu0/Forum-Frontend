/**
 * コンポーネント
 * 
 */
import * as React from 'react';
import * as Redux from 'redux';
import * as Models from './models';
import * as Actions from './actions';
import * as Reducers from './reduders';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';

// 

interface TodoComposerProps extends React.Props<{}> {
    todo: Models.Todo;
}

class TodoComposer extends React.Component<TodoComposerProps, {}> {
    render(){
        var todo = this.props.todo;
        return(
            <li>
            {todo.text}
            </li>
        );

    }
}
// TODO LIST
interface TodoListComposerProps extends React.Props<{}>{
    todos]Models.Todo[];
}

class TodolistComposer extends React.Component<TodoListComposerProps,{}>{
    render(){
        var todos = this.props.todos.map(x => <TodoComposer key={x.id} todo={x} />);
        return (
            <div>
                <ul>
                {todos}
                </ul>
            </div>
        );
    }
}

// TODOの入力フォーム
interface TodoFormComposerProps extends React.Props<{}>{
    onAddTodo:(text:string)=>void
}

class TodoFormComposer extends React.Component<TodoFormComposerProps,{}>{
    private handleSubmit(e:React.SyntheticEvent){
        e.preventDefault();
        var text = this.refs['text'] as HTMLInputElement;
        this.props.onAddTodo(text.value);
        text.value = '';
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type='text' ref='text' />
                <input type='submit' value='追加' />
            </form>
        );
    }

}

interface TodoListPageProps extends React.Props<{}>{

    todoList?: Models.TodoList;
    dispatch?: Redux.Dispatch;
}


class TodoListPage extends React.Component<TodoListPageProps>{
    render(){
        var { todoList,dispatch} = this.props;
        return (
            <div>
                <TodoFormComposer onAddTodo={x => dispatch(Actions.addTodo(x))} />
                <hr />
                <TodoListComposer todos={Models.TodoUtils.toList(todolist.todos)} />
            </div>
        );

    }
}


function selectTodoListPage(state:Reducers.TodoAppState):TodoListPageProps {
    return {
        todoList: state.todos
    };
}

export const ReduxTodoListPage = ReactRedux.connect(selectTodoListPage)(TodoListPage);


interface TodoAppProps extends React.Props<{}>{

}

export class TodoApp extends React.Component<TodoAppProps,{}>{
    render(){
        return(
            <div>
                <h1>TODOアプリ</h1>
                {this.props.children}
            </div>
        );
    }
}

