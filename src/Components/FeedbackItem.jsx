import Card from "./Shared/Card";
import { FaTimes} from "react-icons/fa";

function FeedbackItem({ item, deleteHandler }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteHandler(item.id)} className="close">
        <FaTimes color="purple"/>
      </button>
      <div className="text-display">{item.text}</div>
    </ Card>
  );
}

export default FeedbackItem;
