import React from 'react';
import { data } from '../../service/UserService'
import { Main } from '../Main';
import { Header } from '../HomepageHeader';
import { LoadingAnimation } from '../LoadingAnimation'

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        const savedLayout = localStorage.getItem(`layout`);
        const layout = savedLayout ? savedLayout : 'list'

        this.state = {
            users: [],
            layout,
            inputValue: '',
            about: false
        }
    }

    loadData() {
        data()
            .then(users => this.setState({
                users: users
            }));
    }

    componentDidMount() {
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

        const usersFilteredFirstName = users.filter(user => (
            user.name.first.toLowerCase().includes(inputValue.toLowerCase())
        ));
        const usersFilteredLastName = users.filter(user => (
            user.name.last.toLowerCase().includes(inputValue.toLowerCase())
        ));

        const hasUsers = this.state.users.length > 0
        const allUsers = [...usersFilteredFirstName, ...usersFilteredLastName];

        return (
            <>
                <Header
                    layout={this.state.layout}
                    onLayoutChangeClick={this.onLayoutChangeClick}
                    refreshPage={this.refreshPage}
                />

                {
                    !hasUsers
                        ? <LoadingAnimation />
                        : (
                            <Main
                                allUsers={allUsers}
                                layout={this.state.layout}
                                onInputChange={this.onInputChange}
                                value={this.state.inputValue} />
                        )
                }
            </>
        );

    }
}

export {
    Homepage
}