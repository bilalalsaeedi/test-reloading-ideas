import {createContext, useContext, useState} from 'react';

const InstanceContext = createContext(null);

export const useInstance = () => useContext(InstanceContext);

export const InstanceProvider = ({children}) => {
    const [helloComponent, setHelloComponent] = useState(null);

    return (
        <InstanceContext.Provider value={{helloComponent, setHelloComponent}}>
            {children}
        </InstanceContext.Provider>
    );
};
