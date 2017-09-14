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
    props(e){
        e.preventDefault()
        this.setState({
            
        })
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        children: PropTypes.node,
        classification: PropTypes.string.isRequired,
        mines: PropTypes.number.isRequired
    };

    static defaultProps={
        classification: "Unknown"
    }
    render(){
        const{
            name,
            mines,
            classification,
            children
        } = this.props;

        return(
            <div className="onPlanet">
                <h1 className='header'>{name.toUpperCase()} <br/> [{classification} class] <small>Mine count: {mines}</small></h1>
                {children}
                <hr/>
                Human: {this.state.human}
                <hr/>
                Alien: {this.state.alien}
            </div>   
        )
    }
}

export default Planet;