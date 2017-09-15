import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CrewMember from './CrewMember.js'

class Spaceship extends Component{
    constructor(props){
        super(props);
        this.state={
            name: ""
        }
    }
    static propTypes={
        name: PropTypes.string,
        children: PropTypes.node.isRequired,
        commanderType: PropTypes.node.isRequired,
    };
    
    // static defaultProps ={
    //     commanderType: CrewMember({name: 'Hamza', rank:'Boss'})
    // }


    render() {
        const {
            name, 
            children,
            onIncrement,
            commanderType,
            clickHandler
        } = this.props;

        const creaturesOnboard = children.map((child, idx)=>{
            if(child.type.name === commanderType){
                return child;
            }else{
                return(
                    <div className="alert-alert" key={idx}>
                        {child}
                    </div>
                );
            }
        });

        return(
            
            <div className='ship'>
                <h1>{name}</h1>
                {creaturesOnboard}
                <button onClick={() =>{
                    clickHandler}}>newShip
            </button>
        
            </div>
        );
    }
}

export default Spaceship;