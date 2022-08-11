import './App.css'
import {etsyData} from "./data/etsy.js";
import Listing from "./components/Listing.jsx";
import Stars from "./components/Stars.jsx";

function App() {
    return (
        <>
            <Stars count={3} />
            <Listing items={etsyData}/>
        </>
    )
}

export default App
