import React, { useContext } from 'react';
import { AppContext } from './Context/context';

const Stories = () => {

    const { hits, isLoading, removePost} = useContext(AppContext);
    // console.log(hits[0])

    if(isLoading){
      return (
        <>
        <div className='loader-div'>
          <span class="loader"></span>
        </div>
        </>
      )
    }

  return (
    <>
      <div className="stories-div">
      {
        hits.map((currentpost)=>{
          const {title, author, objectID, url, num_comments} = currentpost;
          return (
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p className='info-div'>
                By &nbsp;<span>{author} </span> &nbsp;|&nbsp; <span>{num_comments} Comments</span>
              </p>
              <div className="card-button">
                <a href={url} target='_blank'>Read More</a>
                <a style={{cursor: 'pointer', textDecoration: 'underline'}} onClick={()=> removePost(objectID)}>Remove</a>
              </div>
            </div>
          )
        })
      }
      </div>
    </>
  )
}

export default Stories;