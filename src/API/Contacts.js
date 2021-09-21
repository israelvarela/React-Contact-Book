import axios from "axios"
import React, { Component } from 'react'

class ContactsList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

componentDidMount(){
    axios.get('https://avb-contacts-api.herokuapp.com/contacts')
    .then(response =>{
        this.setState({
            posts: response.data
        })
        console.log(response.data)
    })
}

render() {
    const {posts} = this.state
    return (
        <div>
            <h1>Contacts</h1>
            {
            posts.map(post => <div key={post.id}>{post.firstName} {post.lastName}</div>)
            }
            
        </div>
    )
}

}

export default ContactsList