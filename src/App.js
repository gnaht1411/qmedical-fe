import {Routes, Route} from "react-router-dom";
import LoginPage from './page/login/loginPage';
import SiteLayout from "./layout/site/siteLayout";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/" element={<SiteLayout/>}/>

            </Routes>
        </div>
    );
}

export default App;
