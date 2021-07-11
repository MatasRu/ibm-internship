import http from "../plugins/Fetch";
import {useState, useEffect} from "react"

function Search({setData, getIp}) {

    const [getSearchInput, setSearchInput] = useState("")
    const [errorMsg, setErrorMsg] = useState("")


    function logKeyword() {
        http.post('http://localhost:3001/logKeyword', {searchInput: getSearchInput, ipaddress: getIp}).then(res => {
            console.log(res)
        })
    }

    function getData() {
        logKeyword()
        if (!/^[a-zA-Z0-9\s]*$/.test(getSearchInput)) {
            return setErrorMsg("You can only use letters and numbers")
        }
        if (getSearchInput.length > 40) {
            return setErrorMsg("Search phrase is too long it should be no longer than 40 symbols")
        }
        setErrorMsg("")
        http.get(`https://gnews.io/api/v4/search?max=9&q="` + getSearchInput + `"&token=8b2a4993f5b18560d838cd8ba7ba2549&lang=en`).then(res => {
            setData(res)
            if (res.totalArticles < 1) {
                setErrorMsg("Nothing was found")
            }
        })
        setSearchInput("")
    }

    return (
        <div className="mt-5 d-flex flex-column align-items-center">
            <div className="d-flex">
                <input onChange={e => setSearchInput(e.target.value)} type="text" placeholder="Search for smth"/>
                <button className="btn-danger" onClick={getData}>Search</button>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <span style={{color: "red"}}>{errorMsg}</span>
            </div>


        </div>
    );
}

export default Search;