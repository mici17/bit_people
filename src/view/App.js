import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer'
import { Main } from './Main';
import { data } from '../service/UserService'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            layout: "list"
        }
    }

    loadData() {
        data()
            .then(users => this.setState({
                users: users
            }))
    }

    componentDidMount() {
        this.loadData()

    }

    onGridButtonClick = () => {
        this.setState({ layout: "grid" })
    }

    onListButtonClick = () => {
        this.setState({ layout: "list" })
    }
    refreshPage = () => {
        this.loadData()


    }
    render() {

        return (
            <React.Fragment>
                <Header layout={this.state.layout} onGridButtonClick={this.onGridButtonClick} onListButtonClick={this.onListButtonClick} refreshPage={this.refreshPage} />
                <Main allUsers={this.state.users} layout={this.state.layout} />
                <Footer />
            </React.Fragment >
        )
    }
};


export {
    App
}