import React, { Component } from 'react'
import {connect} from "react-redux"

class Playlist extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const { queue } = this.props;
        let playlist = queue.map(({url}, index)=>{
            return (
                <ul className="collection">
                    <li key={index} className="collection-item">{url}</li>
                </ul>
            )
        }); 
        return (
            <div>
                {playlist}
            </div>
        ) 
    }
}

const mapStateToProps = state => ({
    queue: state.Queue.queue,
});

export default connect(mapStateToProps) (Playlist)