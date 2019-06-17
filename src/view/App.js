import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer'
import { Main } from './Main';
import { data } from '../service/UserService'
import { SearchBar } from './SearchUsers'
import { LoadingAnimation } from './LoadingAnimation'


class App extends React.Component {
    constructor(props) {
        super(props);

        // const savedLayout = localStorage.getItem(`layout`)
        // const layout = savedLayout || 'list' ---> drugi nacin zapisivanja

        const savedLayout = localStorage.getItem(`layout`);
        const layout = savedLayout ? savedLayout : 'list'

        this.state = {
            users: [],
            layout,
            inputValue: '',
            isLoading: true
        }

    }

    loadData() {
        data()
            .then(users => this.setState({
                users: users
            }));
    }

    componentDidMount() {
        this.setState({ isLoading: false });
        this.loadData();

    }

    onLayoutChangeClick = () => {

        const layout = this.state.layout === 'list' ? 'grid' : 'list'
        this.setState({ layout })
        localStorage.setItem('layout', layout)
    }

    refreshPage = () => {
        this.setState({ users: [] });
        this.loadData();
    }


    onInputChange = (e) => {
        this.setState({ inputValue: e.target.value });

    }


    render() {

        const { users, inputValue } = this.state;

        const usersFiltered = users.filter(user => (
            user.name.first.toLowerCase().includes(inputValue.toLowerCase())
        ));

        const hasUsers = this.state.users.length > 0

        const mainJSX = <Main
            allUsers={usersFiltered}
            layout={this.state.layout}
            onInputChange={this.onInputChange}
            value={this.state.inputValue} />


        return (
            <React.Fragment>
                <Header layout={this.state.layout}
                    onLayoutChangeClick={this.onLayoutChangeClick}
                    refreshPage={this.refreshPage} />
                {hasUsers ? mainJSX : <LoadingAnimation />}
                < Footer />
            </React.Fragment>
        )

    }
};



export {
    App
}