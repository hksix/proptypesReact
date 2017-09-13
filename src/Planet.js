import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CrewMember from './CrewMember.js'

class Planet extends Component{
    constructor(props){
        super(props);
        this.children = this.props.children;
        this.state=({
            human:0,
            alien: 0,
        })
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        children: PropTypes.node,
        classification: PropTypes.string.isRequired
    };

    static defaultProps={
        classification: "Unknown"
    }
    render(){
        const{
            name,
            classification,
            children
        } = this.props;

        var humans= 0
        var aliens = 0
        const peopleOnland = children.map((child, idx)=>{
            if(child.type.name ==='CrewMember'){
                humans =  humans + 1;
            }else{
                aliens = aliens + 1;
            }
        })
        console.log({children})
        return(
            <div className="onPlanet">
                <h1 className='header'>{name.toUpperCase()} <br/> [{classification} class]</h1>
                {children}
                <hr/>
                Human: {this.state.human}
                <hr/>
                Alien: {this.state.alien}
            </div>   
        )
    }
    __counter=(humans, aliens)=>{
        this.setState({
            human: humans,
            alien: aliens
        })
    }
}

export default Planet;