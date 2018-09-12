import React from 'react'

class Hello extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <h2>Hello {this.state.name}!</h2>
                    </div>
                </div>
            </nav>
        )
    }

    constructor(props) {
        super(props)
        this.state = ({name: props.match.params.name})
    }
}

export default Hello