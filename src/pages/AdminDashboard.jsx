import React, { useEffect, useState } from "react";
import { MdArrowOutward, MdDelete, MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "../pagestyle/AdminDashboard.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createBlog,
  deleteBlog,
  fetchBlog,
  updateBlog,
} from "../store/blogSlice";
import { FaEdit, FaPen, FaPenFancy } from "react-icons/fa";
import "../pagestyle/Blog.scss";
import Swal from "sweetalert2";

const AdminDashboard = ({ setUserRole }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blog, status } = useSelector((state) => state.blog.blog);

  const [edit, setEdit] = useState(null);
  const [inputImg, setInputImg] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputDate, setInputDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [editImage, setEditImage] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editDate, setEditDate] = useState("");

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  const handleCreate = (e) => {
    e.preventDefault();
  
    if (!inputImg?.trim() || !inputTitle?.trim() || !inputDesc?.trim()) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill in all blog details before submitting.",
        customClass: {
          popup: "wishlist-popup",
          title: "wishlist-title",
          htmlContainer: "wishlist-text",
          confirmButton: "wishlist-button",
        },
      });
      return;
    }
  
    dispatch(
      createBlog({
        inputImg: inputImg.trim(),
        inputTitle: inputTitle.trim(),
        inputDesc: inputDesc.trim(),
        inputDate,
      })
    ).then(() => dispatch(fetchBlog()));
  
    setInputImg("");
    setInputTitle("");
    setInputDesc("");
    setInputDate(new Date().toISOString().split("T")[0]);
  
    setOpenModal(false);
    Swal.fire({
      icon: "success",
      title: "Added",
      text: "Blog has been added successfully!",
      customClass: {
        popup: "wishlist-popup",
        title: "wishlist-title",
        htmlContainer: "wishlist-text",
        confirmButton: "wishlist-button",
      },
    });
  };
  

  const handleDelete = (id) => {
    dispatch(deleteBlog(id)).then(() => dispatch(fetchBlog()));
    Swal.fire({
      icon: "warning",
      title: "Removed",
      text: "Blog has been removed!",
      customClass: {
        popup: "wishlist-popup",
        title: "wishlist-title",
        htmlContainer: "wishlist-text",
        confirmButton: "wishlist-button",
      },
    });
  };

  const handleUpdate = (blog) => {
    setEdit(blog.id);
    setEditImage(blog.img);
    setEditTitle(blog.title);
    setEditDesc(blog.desc);
    setEditDate(blog.date || new Date().toISOString().split("T")[0]); 
    setOpenModal(true);
  };

  const handleSave = () => {
    dispatch(
      updateBlog({
        id: edit,
        img: editImage.trim(),
        title: editTitle.trim(),
        desc: editDesc.trim(),
        date: editDate, 
      })
    ).then(() => dispatch(fetchBlog()));

    setEdit(null);
    setEditImage("");
    setEditTitle("");
    setEditDesc("");
    setEditDate("");

    setOpenModal(false);
    Swal.fire({
      icon: "success",
      title: "Saved",
      text: "Blog has been updated successfully!",
      customClass: {
        popup: "wishlist-popup",
        title: "wishlist-title",
        htmlContainer: "wishlist-text",
        confirmButton: "wishlist-button",
      },
    });
  };

  const logoutAdmin = () => {
    localStorage.removeItem("userRole");
    setUserRole("");
    navigate("/admin");
  };

  return (
    <div className="dashboard admin-dashboard py-3">
      <div className="container-fluid">
        <div className=" row dashboard-head d-flex justify-content-between px-3 align-items-center py-3">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5>Hi, Admin</h5>
                <h2>Welcome to GameVerse!</h2>
              </div>
              <button
                onClick={logoutAdmin}
                aria-label="Log out"
                className="out"
              >
                <MdLogout className="mb-1" />
              </button>
            </div>
          </div>
        </div>
        <div className="row second py-2">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="d-flex justify-content-between align-items-center mb-2 admin-first px-3 py-2">
              <div>
                <small>Total Sales This Month</small>
                <h5 className="mt-2">$12,450 </h5>
              </div>
              <div>
                <img src="./images/static1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="d-flex justify-content-start gap-2 align-items-center mb-2 admin-first px-3 py-2">
              <div>
                <img
                  src="./images/static2.png"
                  alt=""
                  className="static"
                />
              </div>
              <div>
                <small>Total Revenue</small>
                <h5 className="mt-2">$35,040 </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="d-flex justify-content-start gap-2 align-items-center mb-2 admin-first px-3 py-2">
              <div>
                <img
                  src="./images/static3.png"
                  alt=""
                  className="static"
                />
              </div>
              <div>
                <small>
                  <b>New users</b>
                </small>
                <h5 className="mt-2">1,342</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="d-flex justify-content-between align-items-center mb-2 admin-first px-3 py-2">
              <div>
                <small>User Engagement</small>
                <h5 className="mt-2 percent">75%</h5>
              </div>
              <div>
                <img src="./images/static4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row third">
          <div className="col-lg-3">
            <div className="d-flex flex-column gap-2">
              <div className="d-flex justify-content-between gap-2 align-items-center mb-2 admin-first px-3 py-3">
                <div>
                  <small>Top Selling Games</small>
                  <h3 className="mt-2">500+ Sales</h3>
                </div>

                <div>
                  <button className="buy-arrow mb-4">
                    <Link className="link-add pb-1">
                      <MdArrowOutward />
                    </Link>
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-between gap-2 align-items-center mb-2 admin-first px-3 py-3">
                <div>
                  <small>Top Selling Games</small>
                  <h3 className="mt-2">500+ Sales</h3>
                </div>

                <div>
                  <button className="buy-arrow mb-4">
                    <Link className="link-add pb-1">
                      <MdArrowOutward />
                    </Link>
                  </button>
                </div>
              </div>
              <div className="d-flex gap-4 flex-column justify-content-between align-items-center mb-2 admin-first game-pur px-3 py-3">
                <div className="py-2">
                  <div>
                    <h5 className="pb-3">Game Purchases</h5>
                  </div>
                  <div className="d-flex gap-2">
                    <div>
                      <img
                        src="https://daks2k3a4ib2z.cloudfront.net/59bd2f35ac06760001db2fa1/59bd3cce5ea0cd00010eb4f7_pexels-photo-450271.jpeg"
                        alt=""
                        className="game-pur-img"
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <small className="head-dash">GTA 5</small>
                      <small className="desc">
                        {" "}
                        GamerX | Date: March 22, 2025
                      </small>
                    </div>
                  </div>
                </div>
                <div className="pb-2">
                  <div className="d-flex gap-2">
                    <div>
                      <img
                        src="https://daks2k3a4ib2z.cloudfront.net/59bd2f35ac06760001db2fa1/59bd3cccac06760001db3574_pexels-photo-193355.jpeg"
                        alt=""
                        className="game-pur-img"
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <small className="head-dash">FIFA 24</small>
                      <small className="desc">
                        {" "}
                        ProPlayer | Date: March 19, 2025
                      </small>
                    </div>
                  </div>
                </div>
                <div className="pb-2">
                  <div className="d-flex gap-2">
                    <div>
                      <img
                        src="https://daks2k3a4ib2z.cloudfront.net/59bd2f35ac06760001db2fa1/59bd3cce5ea0cd00010eb4f6_pexels-photo-324658.jpeg"
                        alt=""
                        className="game-pur-img"
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <small className="head-dash">Elden Ring</small>
                      <small className="desc">
                        ShadowX | Date: March 17, 2025
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="d-flex justify-content-between gap-2 align-items-center mb-2  px-3 py-3">
              <div>
                <h3 className="mt-2">Publish Blog Post</h3>
              </div>

              <div>
                <button
                  type="button"
                  className="blog-arrow link-add-blog"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={() => {
                    setOpenModal(true);
                    setEdit(null);
                  }}
                >
                  <Link className="link-add">Add Blog +</Link>
                </button>
              </div>
              {openModal && (
                <div className="modal-overlay">
                  <div className="modal-container">
                    <div className="modal-header">
                      <h3 className="py-3 name">
                        {edit ? "Edit Blog" : "Add a New Blog"}
                      </h3>
                      <button
                        className="close-btn"
                        onClick={() => setOpenModal(false)}
                      >
                        ✖
                      </button>
                    </div>
                    <div className="modal-body">
                      <form className="d-flex flex-column">
                        <label className="modal-label">Image</label>
                        <input
                          type="text"
                          className="my-2 modal-input"
                          value={edit ? editImage : inputImg}
                          onChange={(e) =>
                            edit
                              ? setEditImage(e.target.value)
                              : setInputImg(e.target.value)
                          }
                        />
                        <label className="modal-label">Title</label>
                        <input
                          type="text"
                          className="my-2 modal-input"
                          value={edit ? editTitle : inputTitle}
                          onChange={(e) =>
                            edit
                              ? setEditTitle(e.target.value)
                              : setInputTitle(e.target.value)
                          }
                        />
                        <label className="modal-label">Description</label>
                        <input
                          type="text"
                          className="my-2 modal-input"
                          value={edit ? editDesc : inputDesc}
                          onChange={(e) =>
                            edit
                              ? setEditDesc(e.target.value)
                              : setInputDesc(e.target.value)
                          }
                        />
                        <label>Date</label>
                        <input
                          type="text"
                         className="my-2 modal-input"
                          value={edit ? editDate : inputDate}
                          disabled
                        />
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        className="add"
                        onClick={edit ? handleSave : handleCreate}
                      >
                        {edit ? "Save" : "Add"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="d-flex justify-content-between gap-2 align-items-center mb-2  px-3 py-3 admin-blog">
              <div className="blog-map w-100 d-flex flex-wrap gap-xxl-5 gap-lg-2 justify-content-xxl-center d-flex justify-content-lg-start justify-content-md-start justify-content-sm-start justify-content-center">
                {blog && blog.length > 0 ? (
                  blog.map((el) => (
                    <div key={el.id} className="blog-container">
                      <img src={el?.img} alt="blog" />
                      <div className="middle-pr d-flex gap-1 flex-column">
                        <span className="pt-2 title">{el.title}</span>
                        <span>{el.desc?.slice(0, 50)}...</span>
                        <span className="date">{el.date}</span>
                      </div>
                      <div>
                        <div className="icon d-flex edit-delete gap-2">
                          <div>
                            <FaPenFancy
                              className="edit-blog p-1"
                              onClick={() => handleUpdate(el)}
                            />
                          </div>
                          <div>
                            <MdDelete
                              className="delete-blog p-1"
                              onClick={() => handleDelete(el.id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>
                    <p colSpan="4" className="text-center">
                      No blogs found.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
