import { Component } from 'react';
import React from 'react';

export default class DeleteSpot extends Component {

    handleDelete = async () => {
        let body = {}
        let options = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        await fetch(`api/spots/${props.spots._id}`, options)
            .then(res => res.json())
    }


    render() {
        return (
            <button onClick={this.handleDelete}>Delete</button>
        )
    }

}