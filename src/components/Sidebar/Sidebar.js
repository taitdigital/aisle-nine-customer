import React, { useState } from 'react'
import sidebarItems from '../../constants/SidebarItems'
import { Link } from 'react-router-dom'

import { MenuIcon, XCircleIcon } from '@heroicons/react/solid'

export default function Sidebar() {
    
    const [showSidebar, setShowSidebar] = useState(false);
    let items = []

    if (sidebarItems) { 
        items = [...sidebarItems] 
        items = sidebarItems.map((r) => {
            const Icon = (props) => {
                const { name } = props
              
                let icon = null
                if (!name) return ''
                if (name === 'MenuIcon') icon = MenuIcon

                return React.createElement(icon, { ...props })
              }

            return (
                <li key={r.route} className="border-b-gray-500 border-b py-4">
                    <Link to={r.route} onClick={() => setShowSidebar(!showSidebar)} className="flex">
                        <Icon name={r.icon} className="h-5 w-5 pr-2" />
                        <span>{r.label}</span>
                    </Link>
                </li>
            )
        })
    }

    return (
        <>
            {!showSidebar ? (
                <button
                    className="flex text-4xl text-white items-center cursor-pointer fixed left-2 top-3 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                    >
                    <MenuIcon className="h-10 w-10" />
                </button>
            ) : ''}


            <div className={`top-0 left-0 w-[35vw] bg-gray-600 ease-in-out duration-300 p-6 text-white fixed h-full z-40 ${
                showSidebar ? "translate-x-0 " : "translate-x-[-35vw]"
            }`}>
                <button
                    className="flex text-4xl text-white items-center cursor-pointer fixed right-4 top-3 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <XCircleIcon className="h-10 w-10" />
                </button>

                <ul>
                    {items}
                </ul>
            </div>
        </>
    )
}