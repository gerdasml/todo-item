// @flow
import * as React from "react";

type RemoveTodoItemProps = {
    onRemove: () => mixed
};

export class RemoveTodoItem extends React.Component<RemoveTodoItemProps> {
    render(){
        return(
            <button onClick={this.props.onRemove}>Remove</button>
        );
    }
}