import React, { Component } from 'react'


class User extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {name,avatar_url,login,html_url,followers,blog,id} = this.props.user;
        return (
            <React.Fragment>
                <div className="col-md-4 col-sm-6 col-lg-3">
                    <div className="card mt-2">
                        <img src={avatar_url} alt="" className="img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title">{login}</h5>
                            <a href={html_url} className="btn btn-primary btn-sm">Go to Profile</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default User
