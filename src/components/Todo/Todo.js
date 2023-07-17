import { TodoWrapper, TodoUl } from "./Todo.styled";
import TodoLi from "./TodoLi";
import useFormState from "../../hooks/useFormState";

const Todo = () => {
  const { posts } = useFormState();

  const renderedPosts = () => {
    return posts.map((post) => (
      <TodoLi
        key={post.id}
        title={post.postTitle}
        content={post.postContent}
        id={post.id}
      />
    ));
  };

  return (
    <>
      <TodoWrapper>
        <TodoUl>{renderedPosts()}</TodoUl>
      </TodoWrapper>
    </>
  );
};

export default Todo;
