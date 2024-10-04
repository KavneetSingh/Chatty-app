import { useState } from "react";

export default function LikeBtn(){
    let [isLiked, setIsLiked] = useState(false);
    let [clicks, setClicks]= useState(0);

    let toggleLiked= ()=>{
        setIsLiked(!isLiked);
        setClicks(clicks+1);
    }

    let likeStyle = {color: "red"};

    return(
        <div>
            <h4>Clicks = {clicks}</h4>
            <p >
                {
                    isLiked? (<i className="fa-solid fa-heart" onClick={toggleLiked}  style={likeStyle}></i>) : (<i className="fa-regular fa-heart" onClick={toggleLiked}></i>)
                }
            </p>
        </div>
    )
}