import useFormState from "../../hooks/useFormState";
import { Container } from "../styles/Container.styled";
import Todo from "../Todo/Todo";

const Form = () => {
  const { formValues, setFormValues, formSubmit } = useFormState();

  const onSavePostClicked = (e) => {
    e.preventDefault();
    formSubmit();
  };

  return (
    <>
      <Container>
        <form
          onChange={(e) =>
            setFormValues((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        >
          <div className="error-msg"></div>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            placeholder="Title"
            value={formValues?.postTitle}
          />
          <input
            type="text"
            name="postContent"
            placeholder="Content"
            id="postContent"
            value={formValues?.postContent}
          />
          <button type="submit" className="button" onClick={onSavePostClicked}>
            Save Post
          </button>
        </form>

        <Todo />
      </Container>
    </>
  );
};

export default Form;
