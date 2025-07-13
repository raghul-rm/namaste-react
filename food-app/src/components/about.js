import * as React from 'react';
import Profile from './profile';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    fetchProfile = async () => {
        const res = await fetch('https://fakerapi.it/api/v2/user?_quantity=1');
        const json = await res.json();
       this.setState({
        data:json?.data
       });
    }

    componentDidMount(){
        this.fetchProfile();
    }

    render() {
        const data = this.state.data?.[0];
        
        return (
            <main className='main' style={{margin:'40px'}}>
                {/* <img src={data?.image} /> */}
                <div>
                    <h1>About</h1>
                    <Profile data={data} />
                </div>
            </main> 
        )
               
    }
}

export default About;