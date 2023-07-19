import { useState } from "react";
import Card from "./Shared/Card";
import Button from "./Shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ addHandler }) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const reviewChangeHandler = (event) => {
    if (review === "") {
       setBtnDisabled(true);
       setMessage(null);
    } else if (review !== "" && review.trim().length <= 10) {
        setBtnDisabled(true);
       setMessage("Enter at least 10 characters");
    } else {
        setMessage(null);
        setBtnDisabled(false);
    }

    setReview(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (review.trim().length > 10) {
        const newFeedback = {
            review, 
            rating,
        }
        addHandler(newFeedback)        
    }
    
  }; 

  return (
    <Card>
      <form onSubmit={submitHandler}>        
        <h2>How would you rate our service?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={reviewChangeHandler}
            type="text"
            placeholder="Write a review"
            value={review}
          ></input>
          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
