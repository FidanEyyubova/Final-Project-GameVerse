import React, { useContext } from 'react'
import { MyContext } from '../context/MyProvider'
import { Link } from 'react-router-dom'
import { MdArrowOutward } from 'react-icons/md'

const AboutPic = () => {
    const {game} = useContext(MyContext)
  return (
    <div className="home-pic about-pic">
    <div className="container-fluid">
      <div className="row g-0  d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center home-row">
          <div className="col-lg-12 col-md-12 col-12 d-flex justify-content-center align-items-center home-pic-desc">
            <div className="mx-lg-5">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutPic
