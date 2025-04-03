import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../store/blogSlice";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "../pagestyle/Blog.scss";

const Blog = () => {
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blog.blog);
  const status = useSelector((state) => state.blog.status);

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Something went wrong!</p>;

  return (
    <div className="blog">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-12 back-img"
            style={{
              backgroundImage: `url(https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/most-anticipated-games-2025-gta-6-avowed-like-a-dragon-pirate-yakuza-sunderfolk-clair-obscur-game-rant.jpg?q=49&fit=crop&w=767&h=&dpr=2)`,
              height: "600px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Header />
            <Navbar />
          </div>
          <div className="row">
            {blog && blog.length > 0 ? (
              blog.map((el) => (
                <div key={el.id} className="col-lg-6">
                  <div className="card m-3" style={{ width: "18rem" }}>
                    <img src={el.img} className="card-img-top" alt={el.title} />
                    <div className="card-body">
                      <h5 className="card-title">{el.title}</h5>
                      <p className="card-text">{el.desc}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-lg-12">
                <p>No blogs available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
