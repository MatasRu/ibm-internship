import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Search from "./components/Search";
import Results from "./components/Results";
import {useEffect, useState} from "react"
import http from "./plugins/Fetch";

function App() {

    const [getData, setData] = useState([])
    const [getIp, setIp] = useState("")

    useEffect(() => {
        http.get("https://ipgeolocation.abstractapi.com/v1/?api_key=6d036ed603ec4d0aa62da2fdeebe0c4c").then(res => {
            setIp(res.ip_address)
        })
    }, [])


    return (
        <div className="App mt-5">
            <Search getIp={getIp} setData={setData}/>
            <Results getIp={getIp} getData={getData}/>
        </div>
    );
}

export default App;
