import { combineReducers } from "@reduxjs/toolkit";
import blogReducer from "../store/blogSlice";

const rootReducer = combineReducers({
  blog: blogReducer,
});

export default rootReducer;
