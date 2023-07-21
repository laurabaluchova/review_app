import Card from "./Shared/Card";
import { FaTimes, FaEdit} from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackItem({ item }) {
const {deleteHandler, editFeedbackHandler} = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteHandler(item.id)} className="close">
        <FaTimes color="purple"/>
      </button>
      <button className="edit" onClick={() => {editFeedbackHandler(item)}}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.review}</div>
    </ Card>
  );
}

export default FeedbackItem;
