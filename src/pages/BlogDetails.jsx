import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import "../pagestyle/Blog.scss";
import { IoArrowDown } from "react-icons/io5";

const baseURL = "https://qsnhkufqjyikekheefuo.supabase.co/rest/v1/blog";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbmhrdWZxanlpa2VraGVlZnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MDM3ODUsImV4cCI6MjA1Mzk3OTc4NX0.GQfp52qKvFfupCS-NSeCJs2GipfRoAwRCEEmxHZSpU0"; // Keep API keys in environment variables

const BlogDetails = () => {
  const { id } = useParams();
  const { blog } = useSelector((state) => state.blog.blog);
  const [blogDetail, setBlogDetail] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 1500, once: true });
  }, []);

  useEffect(() => {
    if (Array.isArray(blog)) {
      const existingBlog = blog.find((item) => item.id == id);
      if (existingBlog) {
        setBlogDetail(existingBlog);
      } else {
        const fetchBlog = async () => {
          try {
            const res = await axios.get(`${baseURL}?id=eq.${id}&select=*`, {
              headers: { apikey, Authorization: `Bearer ${apikey}` },
            });
            setBlogDetail(res.data[0]);
          } catch (err) {
            console.error("Error fetching blog:", err);
          }
        };
        fetchBlog();
      }
    } else {
      console.error("Expected blog.blog to be an array, but got:", blog);
    }
  }, [id, blog]);

  if (!blogDetail) return <p>Loading...</p>;

  return (
    <div className="blog-detail">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-12 back-img"
            style={{
              backgroundImage: `url(${blogDetail.img})`,
              height: "600px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Header />
            <Navbar />
          </div>
        </div>
        <div className="row g-0">
          <div className="col-12">
            <div className="py-4">
              <div className="d-flex align-items-center gap-3 pt-4">
              <h1>{blogDetail.title}</h1>
              <div className="arrow-icon d-flex justfiy-content-center align-items-center px-2"><IoArrowDown  /></div>
              </div>
              <p className="desc pb-4 pt-3">{blogDetail.desc}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
