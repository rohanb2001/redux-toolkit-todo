import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editPost,
  postAdded,
  selectAllPosts,
  selectPostById,
} from "../slice/postsSlice";

export const FormContext = createContext(null);

const FormContextProvider = ({ children }) => {
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    postTitle: "",
    postContent: "",
  });
  const [isEdit, setIsEdit] = useState({
    value: false,
    id: "",
  });

  const formSubmit = () => {
    const { postTitle, postContent } = formValues;
    if (postTitle && postContent) {
      if (!isEdit.value) {
        dispatch(postAdded(postTitle, postContent));
      } else {
        console.log({
          ...formValues,
          id: isEdit.id,
        });
        dispatch(
          editPost({
            ...formValues,
            id: isEdit.id,
          })
        );
      }
    }

    setFormValues({ postTitle: "", postContent: "" });
  };

  return (
    <FormContext.Provider
      value={{ posts, formValues, setFormValues, formSubmit, setIsEdit }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
