import React from 'react'
import './LectureCollection.css';
import { assets } from '../../assets/assets';

const LectureCollection = ({lectureView}) => {

  return (
    <div className='lectureCollectionDetails'>
    <div className='lectureCollection'>
    <div className='lectureCollection-banner'>
      <h1>Welcome</h1>
      <div className='lectureCollectionClassSelect'>
      <select className='lectureCollectionSelect' required>
        <option>Enter the ClassName</option>
        <option value="Eleven">Eleven</option>
        <option value="Twelve">Twelve</option>
      </select>
      <button className='lectureView-btn'>Enter</button>
      </div>
     </div>
     <div className='lectureCollectionUnits'>
      <div className='lectureUnits'>
        <img src={assets.physics_book} alt="" />
        <a href="" onClick={()=>{lectureView("physics")}}><h3>Physics</h3></a>
        <button className='lectureView-btn' onClick={()=>{lectureView("physics")}}>View</button>
      </div>
      <div className='lectureUnits'>
      <img src={assets.chemistry_book} alt="" />
        <a href="" onClick={()=>{lectureView("chemistry")}}><h3>Chemistry</h3></a>
        <button className='lectureView-btn' onClick={()=>{lectureView("chemistry")}}>View</button>
      </div>
      <div className='lectureUnits'>
      <img src={assets.math_book} alt="" />
        <a href="" onClick={()=>{lectureView("mathematics")}}><h3>Mathematics</h3></a>
        <button className='lectureView-btn' onClick={()=>{lectureView("mathematics")}}>View</button>
      </div>
      <div className='lectureUnits'>
      <img src={assets.english_book} alt="" />
        <a href="" onClick={()=>{lectureView("english")}}><h3>English</h3></a>
        <button className='lectureView-btn' onClick={()=>{lectureView("english")}}>View</button>
      </div>
      <div className='lectureUnits'>
      <img src={assets.nepali_book} alt="" />
        <a href="" onClick={()=>{lectureView("nepali")}}><h3>Nepali</h3></a>
        <button className='lectureView-btn' onClick={()=>{lectureView("nepali")}}>View</button>
      </div>
      <div className='lectureUnits'>
      <img src={assets.social_studies_book} alt="" />
        <a href="" onClick={()=>{lectureView("social_studies")}}><h3>Social Studies</h3></a>
        <button className='lectureView-btn' onClick={()=>{lectureView("social_studies")}}>View</button>
      </div>
     </div>
    </div>
    </div>
  )
}

export default LectureCollection;