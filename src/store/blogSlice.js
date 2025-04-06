import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://qsnhkufqjyikekheefuo.supabase.co/rest/v1/blog";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbmhrdWZxanlpa2VraGVlZnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MDM3ODUsImV4cCI6MjA1Mzk3OTc4NX0.GQfp52qKvFfupCS-NSeCJs2GipfRoAwRCEEmxHZSpU0";

// CREATE BLOG
export const createBlog = createAsyncThunk(
  "blog/createBlog",
  async ({ inputImg, inputTitle, inputDesc }, { rejectWithValue }) => {
    try {
      const newBlog = {
        img: inputImg,
        title: inputTitle,
        desc: inputDesc,
        date: new Date().toISOString().split("T")[0],
      };
      const response = await axios.post(baseUrl, newBlog, {
        headers: {
          apikey: apikey,
          Authorization: `Bearer ${apikey}`,
          "Prefer": "return=minimal"
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

// FETCH BLOGS
export const fetchBlog = createAsyncThunk(
  "blog/fetchBlog",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}?select=*`, {
        headers: {
          apikey: apikey,
          Authorization: `Bearer ${apikey}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

// DELETE BLOG
export const deleteBlog = createAsyncThunk(
  "blog/deleteBlog",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${baseUrl}?id=eq.${id}`, {
        headers: {
          apikey: apikey,
          Authorization: `Bearer ${apikey}`,
        },
      });

      return id;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

// UPDATE BLOG
export const updateBlog = createAsyncThunk(
  "blog/updateBlog",
  async (updatedBlog, { rejectWithValue }) => {
    const { id, img, title, desc, date } = updatedBlog;
    try {
      const response = await axios.patch(
        `${baseUrl}?id=eq.${id}`,
        { img, title, desc, date },
        {
          headers: {
            apikey: apikey,
            Authorization: `Bearer ${apikey}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error.message);
    }
  }
);

const initialState = {
  blog: [],
  status: "idle",
  error: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // CREATE
      .addCase(createBlog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.status = "succeed";
        state.blog.push(action.payload);
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      })

      // FETCH
      .addCase(fetchBlog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.status = "succeed";
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      })

      // DELETE
      .addCase(deleteBlog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.status = "succeed";
        state.blog = state.blog.filter((el) => el.id !== action.payload);
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      })

      // UPDATE
      .addCase(updateBlog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.status = "succeed";
        const index = state.blog.findIndex((el) => el.id === action.payload.id);
        if (index !== -1) {
          state.blog[index] = action.payload;
        }
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

export default blogSlice.reducer;
