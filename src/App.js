import {Routes, Route} from "react-router-dom";
import SiteLayout from "./layout/site/siteLayout";
import AdminLayout from "./layout/admin/adminLayout";
import React from "react";
import LoginPage from "./page/login/loginPage";

function App() {
    return (
        <Routes>
            <Route path="/admin/*" element={<AdminLayout/>}/>
            <Route path="/*" element={<SiteLayout/>}/>
            {/*<Route path="*" element={<NotFound/>}/>*/}
        </Routes>
    );
}

export default App;
