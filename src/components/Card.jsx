import React from 'react'
import { Bookmark } from "lucide-react";

function Card(props) {

  return (
    <div className='card'>
      <div className='top'>
        <img src={props.brandLogo} alt='image'/>
        <button>Save <Bookmark /></button>
      </div>

      <div className='center'>
        <h3>{props.company} <span>{props.datePosted}</span></h3>
        <h2>{props.post}</h2>

        <div className='sub-center'>
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>

      <hr />

      <div className='bottom'>
        <div>
          <h3>${props.pay}/hour</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
}

export default Card;
