import {  Link } from 'react-router-dom';

import './App.css'

export default function Navbar(){
    return (
        <nav>
            <ul>
                {/* <li>
                    <Link to="/">Home </Link>
                </li> */}
                <li>
                    <Link to="/">Notes</Link>
                </li>
            </ul>
        </nav>
    )
}