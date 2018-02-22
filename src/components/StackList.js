import React, { Component } from 'react';
import stacks from './../data/stacks';

class StackList extends Component {
    render() {
        return (
            <div>
                {
                    stacks.map(stack => {
                        return (
                            <h4 key={ stack.id }>{ stack.title }</h4>
                        )
                    })
                }
            </div>
        )
    }
}

export default StackList;