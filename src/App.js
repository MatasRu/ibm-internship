import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Search from "./components/Search";
import Results from "./components/Results";
import {useState} from "react"

function App() {

    const [getData, setData] = useState([])

    return (
        <div className="App mt-5">
            <Search setData={setData}/>
            <Results getData={getData}/>
        </div>
    );
}

export default App;
