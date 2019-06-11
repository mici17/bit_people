import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer'
import { Main } from './Main';
import { listOfAllUsers } from '../shared/listOfAllUsers'


const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Main allUsers={listOfAllUsers[0].results} />
            <Footer />
        </React.Fragment>
    )
};


export {
    App
}