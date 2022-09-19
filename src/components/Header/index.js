import {GrNotification} from 'react-icons/gr'

import {IoPersonOutline} from 'react-icons/io5'

import './index.css'

const Header = () => (
  <div className="header">
    <p className="myapps">
      My Apps &gt; <span>Tasks</span>
    </p>
    <div>
      <GrNotification className="icons" />
      <IoPersonOutline className="icons" />
    </div>
  </div>
)

export default Header
