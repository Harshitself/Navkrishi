import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let{title,description,imageurl,newsurl}=this.props;
        return (
            <div>
                <div className="card" >
                    <img src={!imageurl?'https:picsum.photos/200':imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{!title?'No Title avilable':title}</h5>
                        <p className="card-text">{description?description:'No description avilable'}</p>
                        <a href={newsurl} target="-blank" className="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )

    }
}

export default Newsitem

