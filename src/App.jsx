import './App.css'
import {Home} from "./components/Home/Home.jsx";
import {Header} from "./components/Header/Header.jsx";
import {AllTools} from "./components/Home/AllTools/AllTools.jsx";

function App() {

    return (
        <div className={'container'}>
            <Header/>
            <div className={'back'}>

                <AllTools/>
                <Home/>
            </div>
        </div>
    )
}

export default App
