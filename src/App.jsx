import './App.css'
import {Home} from "./components/Home/Home.jsx";
import {Header} from "./components/Header/Header.jsx";
import {AllTools} from "./components/Home/AllTools/AllTools.jsx";
import {useSelector} from "react-redux";

function App() {
    const items = useSelector(state => state.price.myTools)
    return (
        <div className={'container'}>
            <Header/>
            <div className={'back'}>

                <AllTools/>
                {<Home/>}
            </div>
        </div>
    )
}

export default App
