import React, { useState } from 'react';

export default function StateExample() {
    const [likes, setLikes] = useState(0);
    const [disLikes, setDisLikes] = useState(0)

    function handleLikes() {
        if (likes === 0) {
            setLikes(1); // likes =1
        }
        else if (likes === 1) {
            setLikes(0);
        }
        // alert("I love it")
        // setLikes(likes + 1);
    }
    return (
        <>
            <p>People who likes React are {likes}</p>
            <img src="https://cdn.iconscout.com/icon/free/png-256/react-2-458175.png" />
            <p onClick={handleLikes}>❤ </p>
            <p>{likes}</p>
            <p onClick={() => { setDisLikes(disLikes + 1) }}>😢 {disLikes}</p>
        </>
    )
}