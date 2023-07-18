import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, deleteHandler }) {
    if(!feedback || feedback.length === 0) {
        return <p>no feedback yet</p>
    }
  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
           <FeedbackItem key={item.id} item={item} deleteHandler={deleteHandler}/>
        ))}
    </div>
  )
}

export default FeedbackList