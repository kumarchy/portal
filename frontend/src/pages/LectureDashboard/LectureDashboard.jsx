import React, { useState } from 'react';
import './LectureDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars, FaTimes } from "react-icons/fa";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import LectureVideos from '../LectureVideos/LectureVideos';

const LectureDashboard = ({checkNotes}) => {
  const [showBar, setShowBar] = useState(false);
  const [showLectures, setShowLectures] = useState(false); 
  const [showNotes, setShowNotes] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState("Thermodynamics"); 

  const toggleLectureUnits = () => {
    setShowLectures(!showLectures); 
  };

  const toggleNotesUnits = () => {
    setShowNotes(!showNotes);
  };

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson); 
  };

  return (
    <div className='lectureDashboardDetails'>
      <FaBars className='lecturebar' onClick={() => setShowBar(true)} />
      <div className={`lectureDashboard ${showBar ? 'show' : ''}`}>
        <label>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='lectureSearch_icon' />
          <input type="text" placeholder='Search Lessons' />
          <FaTimes onClick={() => setShowBar(false)} className='lectureCrossbar'/>
        </label>
        <div className='lectureDashboard-buttons'>
          <button className='lectureDashboard-btn' onClick={toggleLectureUnits}>
            Lessons
          </button>

          {showLectures && (
            <div className='lectureUnitsName'>
              <p onClick={() => handleLessonClick('Thermodynamics')}>Thermodynamics</p>
              <p onClick={() => handleLessonClick('Mechanics')}>Mechanics</p>
              <p onClick={() => handleLessonClick('Heat and Temperature')}>Heat and Temperature</p>
              <p onClick={() => handleLessonClick('Astronomy')}>Astronomy</p>
            </div>
          )}

          <button className='lectureDashboard-btn' onClick={toggleNotesUnits}>Notes</button>
          {showNotes && (
            <div className='lectureUnitsName'>
              <p onClick={()=>{checkNotes("Thermodynamics")}}>Thermodynamics.pdf</p>
            </div>
          )}
        </div>
      </div>

      {selectedLesson && (
        <div>
          <LectureVideos />
        </div>
      )}
    </div>
  );
};

export default LectureDashboard;
