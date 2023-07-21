import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      review: "Item from context",
      rating: 10,
    },

    {
      id: 2,
      review: "Second item from context",
      rating: 8,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteHandler = (id) => {
    if (window.confirm("Do you want to delete the item?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addHandler = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  const editFeedbackHandler = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteHandler,
        addHandler,
        editFeedbackHandler,        
        updateFeedback,
      }}
    >
      {children}{" "}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
