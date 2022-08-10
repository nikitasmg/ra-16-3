import './App.css'
import {etsyData} from "./data/etsy.js";
import Listing from "./components/Listing.jsx";

function App() {
    return (
        <>
            <Listing items={etsyData}/>
        </>
    )
}

export default App
