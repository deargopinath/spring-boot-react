import React from 'react'

class TextArea extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label className="form-label">{this.props.title}</label>
                <textarea 
                    className="form-control"
                    id={this.props.name}
                    name={this.props.name}
                    rows={this.props.rows}
                    cols={this.props.columns}
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.setText}
                />
            </div>
        )
    }

    setText(event) {
        this.setState({value: event.target.value})
    }

    constructor (props) {
        super(props)
        this.state = {value: ''}
        this.setText = this.setText.bind(this)
    }
}

export default TextArea