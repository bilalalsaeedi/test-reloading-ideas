import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {useMemo} from 'react';

function AView() {
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

        return (
            <div>
                <h1>A View</h1>
                {/* Unity WebGL component here */}
            </div>
        );
    }, []);

    return memoizedComponent;
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
    );
}


export default App;
