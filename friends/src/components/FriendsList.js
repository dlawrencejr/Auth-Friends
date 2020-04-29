import React, { useState, useEffect } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'


const FriendsList = () =>{
    const [newFriend,setNewFriend] = useState([])
    const [friends,setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends',friends)
        .then(res => {
            console.log('Friend List', res);
            setFriends(res.data)
        })
        .catch(err => console.log('Error', err));
    });

    const handleChange = event => {
        setNewFriend({ ...newFriend, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
    
        axiosWithAuth()
          .post("/api/friends", newFriend)
          .then(res => {
            console.log(res.data);
            setFriends(res.data);
          })
          .catch(err => console.log("Error", err));
      };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' value= {newFriend.name} onChange={handleChange} placeholder='Name'/>
                <input type='text' name='age' value={newFriend.age} onChange={handleChange}placeholder='Age'/>
                <input type='email' name='email' value={newFriend.email} onChange={handleChange} placeholder='Email'/>
                <button>Submit</button>
            </form>
            <>
                <div key={friends.id}>
                    {friends.map(friend =>{
                        return (
                            <div>
                                <p>{friend.name}</p>
                                <p>{friend.age}</p>
                                <p>{friend.email}</p>
                            </div>
                        );
                    })}
                </div>
            </>
        </div>

    );
}

export default FriendsList;