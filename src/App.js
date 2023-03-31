import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import KeepAlive from 'react-activation';
import {useMemo} from 'react';

function HelloComponent() {
    console.log('Rendered HelloComponent component');
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
