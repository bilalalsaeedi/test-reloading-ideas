import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import KeepAlive from 'react-activation';
import {useMemo} from 'react';

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
    return useMemo(() => {
        return (
            <div>
                <h1>A View</h1>
                <HelloComponent/>
            </div>
        );
    }, []);
}

function BView() {
    return useMemo(() => {
        return (
            <div>
                <h1>B View</h1>
                <HelloComponent/>
            </div>
        );
    }, []);
}

function App() {
    return (
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
                    <Route path="/a" element={<KeepAlive name="AView"><AView/></KeepAlive>}/>
                    <Route path="/b" element={<KeepAlive name="BView"><BView/></KeepAlive>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
