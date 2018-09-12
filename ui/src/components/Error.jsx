import React from 'react'

const Error = (props) => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <h2>Oops! The page - "{props.match.params.invalidPath}" could not be found</h2>
                </div>
            </div>
        </nav>
    )
}

export default Error