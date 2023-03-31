import React from 'react'
import Cards from './Cards';

const Jumbotron = () => {
    return (
        <div className="container mt-3">

            <div className="mt-4 p-5 bg-light text-black rounded">
                <h1>A Warm Welcome</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
                <button type="button" className="btn btn-primary">Call to acction!</button>
            </div>

            <Cards />

        </div>

        

    )
}

export default Jumbotron;