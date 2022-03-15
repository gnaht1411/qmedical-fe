import { Routes, Route } from "react-router-dom";
import SiteLayout from "./layout/site/siteLayout";
import AdminLayout from "./layout/admin/adminLayouts";
import React from "react";
import 'react-datepicker/dist/react-datepicker.css'
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route path="/*" element={<SiteLayout />} />
            {/*<Route path="*" element={<NotFound/>}/>*/}
        </Routes>


    );
}

export default App;
