// @flow
import * as React from "react";
import "../../styles/todoItem.css";
import { PriorityBadge } from "./PriorityBadge";
import { TodoItemTitle } from "./TodoItemTitle";
import { StatusInput } from "./StatusInput";
import { EditTodoItem } from "./EditTodoItem";
import { RemoveTodoItem } from "./RemoveTodoItem";
import { TodoItemForm } from "../TodoItemForm/TodoItemForm";

type TodoItemContainerProps = {
    todoItem: TodoItemRef,
    onFullDataRequest: () => Promise<TodoItem>,
    onItemUpdate: (data: TodoItem) => mixed,
    onItemRemove: () => mixed,
    onStatusUpdate: (newStatus: TodoItemStatus) => mixed
};

type TodoItemContainerState = {
    isOpen: boolean
};

export class TodoItemContainer extends React.Component<TodoItemContainerProps, TodoItemContainerState> {
    state = {
        isOpen: false
    };
    render() {
        return(
            <div>
                <div className="todo-item-container">
                    <PriorityBadge priority={this.props.todoItem.priority}/>
                    <TodoItemTitle title={this.props.todoItem.title}/>
                    <StatusInput status={this.props.todoItem.status} onChange={this.props.onStatusUpdate}/>
                    <EditTodoItem onEdit={() => this.setState({isOpen: !this.state.isOpen})}/>
                    <RemoveTodoItem onRemove={this.props.onItemRemove}/>
                </div>
                {
                    this.state.isOpen
                    ? <div>
                        <TodoItemForm
                            onUpdate={newData => this.props.onItemUpdate(newData)}
                            todoItemRef={this.props.todoItem}
                            onFullDataRequest={this.props.onFullDataRequest}
                        />
                    </div>
                    : ""
                }
            </div>
        );
    }
}