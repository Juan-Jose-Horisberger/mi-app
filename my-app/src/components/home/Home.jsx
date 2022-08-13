import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Hola estoy en Home!!!</h1>
            <Link to='/SearchBar'>
                <h1>Ir a Searchbar</h1>
            </Link>

            <Link to='/Card'>
                <h1>Ir a Card</h1>
            </Link>
        </div>
    )
}