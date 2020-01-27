import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'
import { addToQueue } from '../action/queue'
import Playlist from './playlist';



 class URL extends Component {
    constructor(props){
        super(props);
        this.state = {
            url : '',
            list: [],
        }
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    onChange(e) {
    this.setState({
        [e.target.name] : e.target.value
    })
    }

    onClick(e){
        e.preventDefault();
        const { url, list } = this.state;
        list.push(url)
        let array = list.map((item, index)=>{
            return {
                id: index+1,
                url: item
            }
        })
        console.log(array)
        this.props.addToQueue(array)
    }
    render() {
        return (
            <div className="container">
                <h2>Youtube Playlist</h2>
                <div className="row">
                    <div className="col s9">
                        <label>Video URL</label>
                        <input 
                            type="text" name="url" placeholder="Paste video url here" value={this.state.url} onChange={this.onChange}
                        />
                    </div>
                    <div className="col s3">
                        <button className="waves-effect waves-light btn" onClick={this.onClick} style={{marginTop:"10%"}}>Add to queue</button>
                    </div>
                </div>  
                <br /><br />
                <div className="row">
                    <div className="col s6">
                        <ReactPlayer url={this.state.url} controls={true}  />
                    </div>
                    <div className="col s1"></div>
                    <div className="col s5">
                        <Playlist />
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(null, {addToQueue})(URL)