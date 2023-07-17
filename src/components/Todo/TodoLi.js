import useFormState from "../../hooks/useFormState";
import { TodoList } from "./Todo.styled";

const TodoLi = ({ title, content, id }) => {
  const { setFormValues, setIsEdit } = useFormState();

  const handleEditPost = (e) => {
    e.preventDefault();
    setFormValues({
      postTitle: title,
      postContent: content,
    });
    setIsEdit({
      value: true,
      id: id,
    });
  };

  return (
    <TodoList key={id}>
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="buttons-container">
        {" "}
        <button className="edit-btn" onClick={handleEditPost}>
          Edit
        </button>
        <button className="delete-btn">Delete</button>
      </div>
    </TodoList>
  );
};

export default TodoLi;
