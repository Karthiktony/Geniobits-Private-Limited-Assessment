import {MdOutlineDateRange} from 'react-icons/md'

import {BsFillCircleFill, BsSearch, BsListTask} from 'react-icons/bs'

import {GrTask} from 'react-icons/gr'

import {FaGreaterThan, FaLessThan} from 'react-icons/fa'

import Cait from '../Cait'

import Header from '../Header'

import './index.css'

const HRMS = () => (
  <div className="main-container">
    <div className="cait-container">
      <Cait />
    </div>
    <div className="header-container">
      <div>
        <Header />
      </div>
      <div className="my-cont">
        <div className="task-conatiner">
          <div className="task">
            <p>Tasks</p>
            <div className="date">
              <FaLessThan className="arrow-icons xyz" />
              <MdOutlineDateRange />
              <p>May 9, 2022</p>
              <FaGreaterThan className="arrow-icons xyz" />
            </div>
          </div>
          <hr />
          <div className="box-container">
            <div className="box box1">
              <p className="count">
                66 <br />
                Ongoing
              </p>
            </div>
            <div className="box box2">
              <p className="count">
                24 <br />
                Delayed
              </p>
            </div>
            <div className="box box3">
              <p className="count">
                10 <br />
                Completed
              </p>
            </div>
            <div className="box box4">
              <p className="count">
                100 <br />
                Total Assigned
              </p>
            </div>
          </div>
        </div>
        <div className="btn">
          <button type="button">+ Add New Task</button>
        </div>
      </div>

      <div className="sort-by">
        <p className="sort-text">Sort By:</p>
        <select>
          <option>All</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>
      <div className="task-list-container">
        <div className="task-all">
          <p className="task-list-text">Task List</p>
          <div className="all">
            <p className="all-text">
              <BsListTask className="my-icons" />
              All
            </p>
            <p>
              <GrTask className="my-icons" />
              My Tasks
            </p>
          </div>
        </div>
        <div className="search-container">
          <div className="my-search">
            <BsSearch />
            <input type="search" />
          </div>
          <div className="page">
            <FaLessThan className="arrow-icons" />
            <p>1-10 of 50</p>
            <FaGreaterThan className="arrow-icons" />
          </div>
        </div>
        <div className="history-tasks">
          <div className="tasks-table-container">
            <ul className="tasks-table">
              <li className="table-header">
                <p className="table-header-cell cell-1">Task</p>
                <p className="table-header-cell">Time</p>
                <p className="table-header-cell">Date</p>
                <p className="table-header-cell  cell-1">Assigned By </p>
                <p className="table-header-cell cell-1">Assigned To</p>
                <p className="table-header-cell">Deadline</p>
                <p className="table-header-cell">Status</p>
                <p className="table-header-cell">Prority</p>
              </li>
            </ul>
            <ul className="tasks-table main-task ">
              <li className="table-header">
                <p className="table-header-cell cell-1">BGV of new Candites</p>
                <p className="table-header-cell">2:00 PM</p>
                <p className="table-header-cell">Fri, 21 May 22</p>
                <p className="table-header-cell cell-1">Manohar Patnak</p>
                <p className="table-header-cell cell-1">Aravind Karmarkar</p>
                <p className="table-header-cell">Fri, 21 May 22</p>
                <p className="table-header-cell">
                  <BsFillCircleFill className="red" />
                </p>
                <p className="table-header-cell">High</p>
              </li>
            </ul>
            <hr />

            <ul className="tasks-table">
              <li className="table-header">
                <p className="table-header-cell cell-1">Onboard new Client</p>
                <p className="table-header-cell">2:00 PM</p>
                <p className="table-header-cell">Fri, 21 May 22</p>
                <p className="table-header-cell cell-1">Manohar Patnak</p>
                <p className="table-header-cell cell-1">Aravind Karmarkar</p>
                <p className="table-header-cell">Fri, 21 May 22</p>
                <p className="table-header-cell">
                  <BsFillCircleFill className="orange" />
                </p>
                <p className="table-header-cell">High</p>
              </li>
            </ul>
            <hr />

            <ul className="tasks-table">
              <li className="table-header">
                <p className="table-header-cell cell-1">BGV of new Candites</p>
                <p className="table-header-cell">2:00 PM</p>
                <p className="table-header-cell">Fri, 21 May 22</p>
                <p className="table-header-cell cell-1">Manohar Patnak</p>
                <p className="table-header-cell cell-1">Aravind Karmarkar</p>
                <p className="table-header-cell">Fri, 21 May 22</p>
                <p className="table-header-cell">
                  <BsFillCircleFill className="red" />
                </p>
                <p className="table-header-cell">Low</p>
              </li>
            </ul>
            <hr />

            <ul className="tasks-table">
              <li className="table-header">
                <p className="table-header-cell cell-1">BGV of new Candites</p>
                <p className="table-header-cell">2:00 PM</p>
                <p className="table-header-cell">Fri, 21 May 22</p>
                <p className="table-header-cell cell-1">Manohar Patnak</p>
                <p className="table-header-cell cell-1">Aravind Karmarkar</p>
                <p className="table-header-cell">Fri, 21 May 22</p>
                <p className="table-header-cell">
                  <BsFillCircleFill className="green" />
                </p>
                <p className="table-header-cell">Low</p>
              </li>
            </ul>
            <hr />

            <ul className="tasks-table">
              <li className="table-header">
                <p className="table-header-cell cell-1">Onboard new Client</p>
                <p className="table-header-cell">2:00 PM</p>
                <p className="table-header-cell">Fri, 21 May 22</p>
                <p className="table-header-cell cell-1">Manohar Patnak</p>
                <p className="table-header-cell cell-1">Aravind Karmarkar</p>
                <p className="table-header-cell">Fri, 21 May 22</p>
                <p className="table-header-cell">
                  <BsFillCircleFill className="orange" />
                </p>
                <p className="table-header-cell">High</p>
              </li>
            </ul>
            <hr />
            <ul className="tasks-table">
              <li className="table-header">
                <p className="table-header-cell cell-1">BGV of new Candites</p>
                <p className="table-header-cell">2:00 PM</p>
                <p className="table-header-cell">Fri, 21 May 22</p>
                <p className="table-header-cell cell-1">Manohar Patnak</p>
                <p className="table-header-cell  cell-1">Aravind Karmarkar</p>
                <p className="table-header-cell">Fri, 21 May 22</p>
                <p className="table-header-cell">
                  <BsFillCircleFill className="green " />
                </p>
                <p className="table-header-cell">Medium</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HRMS
