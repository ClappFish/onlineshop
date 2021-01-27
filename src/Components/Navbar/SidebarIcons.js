import React from 'react';

import { MdPersonOutline, MdLocalGroceryStore, MdCardTravel} from "react-icons/md";


export const SidebarData = [
    {
        title: 'Your Profile',
        path: '/profile',
        icon: <MdPersonOutline />,
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