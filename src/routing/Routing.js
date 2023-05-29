import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowUsers from '../components/showUsers/ShowUsers';
import SideBar from '../components/sideBar/SideBar';
import Users from '../components/users/Users';


export default function Routing() {
    
    return (
        <>
            <BrowserRouter>
                <SideBar>
                    <Routes>
                        <Route path={"/"} element={<Users />} />
                        <Route path={"/showUsers"} element={<ShowUsers />} />
                    </Routes>
                </SideBar>
            </BrowserRouter>
        </>
    )
}
