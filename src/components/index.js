import { Avatar } from '@mui/material';
import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import routes from '../common';
import useLogged from '../functions';
import Drawer from './drawer';
import Self from "./../assets/self.jpg"

function Layout() {
    const log = useLogged()
    let location = useLocation();
    let nav = useNavigate();

    return (
        <div>
            <div className={`bg-[#4678f3] h-[7vh] w-full  px-10 text-white`}>
                <div className="flex justify-between h-full">
                    <p className="text-3xl font-semibold grid content-center">KLEDO TEST {log && 'ADMIN'}</p>
                    <div className="">
                        {
                            log ?
                                <div className="grid content-center h-full">
                                    <div className="flex">
                                        <Avatar src={Self} sx={{ width:45, height:45 }} />
                                        <p className="grid content-center ml-4 text-xl font-normal">Fikr Muhammad .H</p>
                                    </div>
                                </div>
                                :
                                <div className="flex h-full">
                                    {
                                        routes
                                            .filter(x => !x.log)
                                            .map(el => (
                                                <div className={`px-6 grid content-center text-2xl ${`/${el.path}` === location.pathname ? 'bg-[#000000]' : ''}`} onClick={() => nav(el.path)}>
                                                    <p>{el.name}</p>
                                                </div>
                                            ))
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
            <div className="h-[93vh] flex">
                <Drawer />
                <div className={`h-full border-2 w-full ${log ? 'bg-[#bdbdbd]' : ''}`}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout