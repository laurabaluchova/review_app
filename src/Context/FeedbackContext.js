import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch("http://localhost:5000/feedback");
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false)
  };

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
        isLoading,
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
