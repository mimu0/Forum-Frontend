export enum Types{
    AddTodo
}

export interface Action<TPayload>{
    type:Types;
    payload:TPayload
}

export class AddTodoPayload{
    constructor(public text:string){

    }
}

export function addTodo(text:string):Action<AddTodoPayload>{
    return{
        type:Types.AddTodo,
        payload:new AddTodoPayload(text)
    };
}