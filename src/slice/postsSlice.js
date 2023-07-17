import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = {
  posts: [],
  isEdit: false,
  titleData: "",
  contentData: "",
  postId: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        console.log(action.payload);
        state.posts.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            postTitle: title,
            postContent: content,
          },
        };
      },
    },
    editPost: (state, action) => {
      console.log(action.payload);
      const post = action.payload;

      let selectedPostIndex = state.posts.findIndex(
        (eachPost) => eachPost.id === post.id
      );
      console.log(selectedPostIndex);
      state.posts.splice(selectedPostIndex, 1, post);
    },
  },
});

export const selectAllPosts = (state) => state.posts.posts;

export const { postAdded, editPost } = postsSlice.actions;

export default postsSlice.reducer;
