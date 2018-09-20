import React from 'react';

import HeaderContainer from './containers/HeaderContainer';
import ListContainer from './containers/ListContainer';
import FormContainer from './containers/FormContainer';
import FilterContainer from "./containers/FilterContainer";

function App() {
    return (
        <main>
            <HeaderContainer />
            <FilterContainer />
            <ListContainer />
            <FormContainer />
        </main>
    );
}

export default App;