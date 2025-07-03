import * as React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.data);
        return (
            <section>
                <img src={this.props.data?.image} alt={this.props.data?.firstname} />
                <h1>{this.props.data?.firstname} {this.props.data?.lastname}</h1>
                <h5>{this.props.data?.email}</h5>
                <h6>{this.props.data?.website}</h6>
            </section>
        )
    }
}

export default Profile;