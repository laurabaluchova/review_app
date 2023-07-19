import Header from "./Components/Header";
import { Fragment, useState } from "react";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./Components/FeedbackData";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";

function App() {
const [feedback, setFeedback] = useState(FeedbackData);
const deleteHandler = (id) => {
  if(window.confirm("Do you want to delete the item?")) {
    setFeedback(feedback.filter((item) => item.id !== id))
  }
  
}

  return (
    <Fragment>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} deleteHandler={deleteHandler}/>
      </div>
    </Fragment>
  );
}

export default App;
