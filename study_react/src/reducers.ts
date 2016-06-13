/**
 * Reducer
 * Todoを追加するメソッドと、実際のActionオブジェクトを受け取って処理をDispatchするTodosを記述
 * 
 */
import * as Redux from 'redux';
import * as Actions from './actions';
import * as Models from './models';
import assign = requre('object-assign');

// Todoを追加する
function addTodo(state:Models.TodoList,payload:Actions.AddTodoPayload){
    var todos = <{ [key:number]:Models.Todo }>assign({},state.todos);
    var todo = new Models.Todo(payload.text);
    todos[todo.id] = todo;

    return <Models.TodoList>assign({},state,<Models.TodoList>{
        todos:todos
    });
}

export functoin todos(state:Models.TodoList=new Models.TodoList(),action:Actions.Action<any>){
    switch (action.type) {
        case Actions.Types.AddTodo:
            
            return addTodo(state,<Actions.AddTodoPayload>action.payload);
    
        default:
            return state;
    }
}
