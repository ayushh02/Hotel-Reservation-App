import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import SearchItem from '../components/searchItem/SearchItem'
import "./list.css"


const List = () => {

  const location =useLocation();

const[destination,setDestination]=useState(location.state.destination)
const[date,setDate]=useState(location.state.date)
const[openDate,setOpenDate]=useState(false)
const[options,setOptions]=useState(location.state.options)

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>
              {`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}
              </span>
              {openDate && <DateRange onChange={item=> setDate([item.selection])} 
              minDate={new Date()} 
              ranges={date} />}
            </div>
            
            <div className="lsItem">
              <label>Options</label>

<div className="lsOption">              
              <div className="lsOptionItem">
              <span className="IsOptionText">
                Min price <small>per night</small>
              </span>
              <input type="number" className='lsOptionInput' />
            </div>

            <div className="lsOptionItem">
              <span className="IsOptionText">
                Max price <small>per night</small>
              </span>
              <input type="number" className='lsOptionInput' />
            </div>

            <div className="lsOptionItem">
              <span className="IsOptionText">
                Adult
              </span>
              <input type="number" min={1} className='lsOptionInput' placeholder={options.adult}/>
            </div>

            <div className="lsOptionItem">
              <span className="IsOptionText">
                Children
              </span>
              <input type="number" min={0} className='lsOptionInput' placeholder={options.children}/>
            </div>

            <div className="lsOptionItem">
              <span className="IsOptionText">
               Room
              </span>
              <input type="number" min={1} className='lsOptionInput'placeholder={options.room} />
            </div>
            </div>
            </div>
            <button>Search</button>

          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
