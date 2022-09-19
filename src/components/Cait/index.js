import {AiOutlineAppstore, AiOutlineHome} from 'react-icons/ai'

import {FiSettings, FiLogOut} from 'react-icons/fi'

import {BsPeople} from 'react-icons/bs'

import './index.css'

const Cait = () => (
  <div className="cait-container-main">
    <img
      alt="cait"
      src="https://res.cloudinary.com/dpm4p4bpe/image/upload/v1663588443/cait_22_rlsexu.png"
    />
    <p className="edusys">EDUSYS Pvt.Ltd.</p>
    <div className="home-container">
      <div className="text-cont home">
        <AiOutlineAppstore className="icons-home" />
        <p>My Apps</p>
      </div>
      <div className="text-cont resource">
        <BsPeople className="icons-home" />
        <p>Resources</p>
      </div>
      <div>
        <div className="text-cont">
          <AiOutlineHome className="icons-home" />
          <p> My Organisation</p>
        </div>
        <div className="text-cont">
          <FiSettings className="icons-home" />
          <p> Settings</p>
        </div>
        <div className="text-cont">
          <FiLogOut className="icons-home" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  </div>
)

export default Cait
