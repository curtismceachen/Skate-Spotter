import { Component } from 'react'

export default class NewSpot extends Component {
    state = {
        name: '',
        description: '',
        address: '',
    }
    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }

    handleSubmit = async () => {
        let body = {
            name: this.state.name,
            description: this.state.description,
            address: this.state.address
        }
        let options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        await fetch("/api/spots", options)
            .then(res => res.json())
            .then(data => {
                this.props.getSpots()
                this.setState({
                    name: "",
                    description: "",
                    address: ""
                })
            })
    }

    componentDidMount() {
        console.log(this.props.user)
        // if (!this.props.user) {
        //     window.location = '/login';
    }

    render() {
        return (
        
            <div>
                <label>Name:</label>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.name}></input>
                <label>Description:</label>
                <textarea type="text" name="description" onChange={this.handleChange} value={this.state.description}></textarea>
                <label>Address:</label>
                <input type="text" name="address" onChange={this.handleChange} value={this.state.address}></input>
                <br/>
                <button onClick={() => alert('clicked')}>Submit</button>
            </div>
        )
    }
}