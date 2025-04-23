import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../store/blogSlice";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "../pagestyle/Blog.scss";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { Trans, useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import { HashLoader } from "react-spinners";
import { ThemeContext } from "../context/ThemeProvider";

const Blog = () => {
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blog.blog);

  const { t } = useTranslation();

  const {isLight} = useContext(ThemeContext)

  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  return (
    <div className={isLight ? "light-app" : "dark-app"}>

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
        </div>
        <div className="row first mx-4 py-2 px-3 mt-4">
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-lg-start justify-content-md-start  justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center gap-2 top-game">
              <span className="pt-1">{t("Top")}</span>
              <h3 className="text-lg-start text-md-start text-center">
                {t("Games")}
              </h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-lg-end justify-content-md-end   justify-content-center text-lg-start text-md-start text-center align-items-center">
            <div>
              <span>
                <Trans i18nKey="Topdesc" components={{ br: <br /> }} />
              </span>
            </div>
          </div>
        </div>
        <div className="row py-5" data-aos="fade-down">
          {blog && blog.length > 0 ? (
            blog.map((el) => (
              <div
                key={el.id}
                className="col-lg-4 col-md-6 d-flex flex-column mb-4"
              >
                <div className="card d-flex justify-content-center align-items-center">
                  <img src={el.img} className="card-img-top" alt={el.title} />
                  <div className="card-body text-xxl-center">
                    <h5 className="card-title">{el.title}</h5>
                    <p className="card-text">{el.desc.slice(0, 80)}...</p>
                    <span className="date-blog">{el.date}</span>
                  </div>
                </div>
                <div className="d-flex mx-lg-3 mb-4 d-flex justify-content-xxl-center">
                  <button className="buy">
                    <Link className="link-add" to={`/blogs/${el.id}`}>
                      Read more
                    </Link>
                  </button>
                  <button className="buy-arrow">
                    <Link className="link-add pb-1" to={`/blogs/${el.id}`}>
                      <MdArrowOutward />
                    </Link>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="d-flex justify-content-center align-items-center load w-100 my-5">
              <HashLoader color="#ff4701" loading={true} size={50} />
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Blog;
