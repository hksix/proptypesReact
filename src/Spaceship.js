import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CrewMember from './CrewMember.js'

class Spaceship extends Component{
    static propTypes={
        name: PropTypes.string,
        children: PropTypes.node.isRequired,
        commanderType: PropTypes.node.isRequired
    };
    
    // static defaultProps ={
    //     commanderType: CrewMember({name: 'Hamza', rank:'Boss'})
    // }


    render() {
        const {
            name, 
            children,
            commanderType
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
            <div>
                <h1>{name}</h1>
                {creaturesOnboard}
            </div>
        );
    }
}

export default Spaceship;