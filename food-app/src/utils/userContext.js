import * as React from 'react';

const userContext = React.createContext(null);

export const UserProvider = ({children}) => {
    const [name, setName] = React.useState('Default');

    return (
        <userContext.Provider value={{name:name, setName:setName}}>{children}</userContext.Provider>
    )
}

export const userUseContext = () => {
    let context = React.useContext(userContext);

    if(!context) {
        throw new Error('Context Value is wrong');
    }

    return context;
}