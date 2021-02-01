import React from 'react';

import { MdPersonOutline, MdLocalGroceryStore, MdCardTravel} from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";


export const SidebarData = [
    {
        title: 'Your Profile',
        path: '/profile',
        icon: <MdPersonOutline />,
        cName: 'nav-text'
    },
    {
        title: 'Your Favorite List',
        path: 'favorites',
        icon: <IoHeartOutline />,
        cName: 'nav-text'
    },
    {
        title: 'Your Shopping Cart',
        path: '/cart',
        icon: <MdCardTravel />,
        cName: 'nav-text'
    },
    {
        title: 'Shop',
        path: '/',
        icon: <MdLocalGroceryStore />,
        cName: 'nav-text'
    },
];