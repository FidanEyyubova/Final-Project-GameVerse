import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import "../pagestyle/NotFound.scss"

const NotFound = () => {
  return (
    <div className="notfound d-flex justify-content-center align-items-center">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="row g-0 d-flex justify-content-center align-items-center">
          <div className="col-12 d-flex justify-content-center align-items-center text-center">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <h1>404</h1>
              <p class="animate__animated animate__tada animate__infinite	infinite animate__slower">Ooops No Page Found!!</p>
              <div className="d-flex mt-5 mb-5">
                <button className="buy">
                  <Link className="link-add" to={"/"}>Back to home</Link>
                </button>
                <button className="buy-arrow">
                  <Link className="link-add pb-1">
                    <MdArrowOutward />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
