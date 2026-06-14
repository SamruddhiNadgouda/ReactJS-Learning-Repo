import "./Comments.css";
import { useState } from "react";
import CommentsForm from "./CommentsForm";

export default function Comments() {
    let [comments, setComments] = useState([
        {
            username: "@sn",
            remarks: "Great job!",
            rating: 4
        },
    ]);

    let addNewComment = (comment) =>{
        setComments((currComments) => [...currComments, comment]);
    }

    return (
        <>
            <div>
                <h2>All Comments</h2>
                {comments.map((comment, idx) => (
                    <div className="comment" key={idx}>
                        <span>{comment.remarks}</span>
                        &nbsp;
                        <span>(rating = {comment.rating})</span>
                        <p>- {comment.username}</p>
                    </div>
                ))}
            </div>
            <hr></hr>
            <CommentsForm addNewComment = {addNewComment}/>
        </>
    );
}