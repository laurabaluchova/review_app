import Header from "./Components/Header";
import { Fragment, useState } from "react";
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import { v4 as uuidv4} from "uuid";

function App() {
const [feedback, setFeedback] = useState(FeedbackData);
const addHandler = (newFeedback) => {
  newFeedback.id = uuidv4();
  setFeedback([newFeedback, ...feedback])
}

const deleteHandler = (id) => {
  if(window.confirm("Do you want to delete the item?")) {
    setFeedback(feedback.filter((item) => item.id !== id))
  }
  
};

  return (
    <Fragment>
      <Header />
      <div className="container">
        <FeedbackForm addHandler={addHandler}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} deleteHandler={deleteHandler}/>
      </div>
    </Fragment>
  );
}

export default App;
