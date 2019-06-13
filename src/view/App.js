import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer'
import { Main } from './Main';
import { listOfAllUsers } from '../shared/listOfAllUsers'
import { data } from '../service/UserService'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            layout: "grid"
        }
    }

    componentDidMount() {
        data()
            .then(users => this.setState({
                users: users
            }))

    }


    render() {

        return (
            <React.Fragment>
                <Header />
                {/* <div className="dugmici">
                    <button className="elButton cards">Cards</button>
                    <button className="elButton list">List</button>
                </div> */}
                <Main allUsers={this.state.users} />
                <Footer />
            </React.Fragment >
        )
    }
};


export {
    App
}