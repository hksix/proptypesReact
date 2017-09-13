import React, {Component} from 'react';

class Spaceship extends Component{
    static propTypes={
        name
    }
    render() {
        const {name} = this.props;
        <div>
            <h1>{name}</h1>
        </div>
    }
}

export default Spaceship;