import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {InstanceProvider, useInstance} from './InstanceContext';
import {useEffect} from 'react';

function HelloComponent() {
    // Logs the component lificycle.
    console.log("-- rendering the child");
    useEffect(() => {
        // The component is mounted only one time.
        console.log("---- mounting the child");
        return () => {
            // The component is never unmounted during reparenting.
            console.log("------ unmounting the child");
        };
    }, []);

    return <div>Hello</div>;
}

function AView() {
    const {helloComponent, setHelloComponent} = useInstance();

    useEffect(() => {
        if (!helloComponent) {
            setHelloComponent(<HelloComponent/>);
        }
    }, [helloComponent, setHelloComponent]);

    return <>{helloComponent}</>;
}

function BView() {
    return (
        <div>
            <h1>B View</h1>
        </div>
    );
}

function App() {
    return (
        <InstanceProvider>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/a">A</Link>
                            </li>
                            <li>
                                <Link to="/b">B</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/a" element={<AView/>}/>
                        <Route path="/b" element={<BView/>}/>
                    </Routes>
                </div>
            </Router>
        </InstanceProvider>
    );
}

export default App;
