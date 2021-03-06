import { useState } from "react";
import { faculties } from "../tools/index.js";
import { getAllFaculties } from '../tools/index';

function FilterBar({setFacultyValue, setStageValue ,setYearValue, setSizeValue }) {

  const handleFacultyInput = (event) => {
    let input = event.target.value;
    setFacultyValue(input);
  };

  const handleStageInput = (event) => {
    let input = event.target.value;
    setStageValue(input);
  };

  const handleYearInput = (event) => {
    let input = event.target.value;
    setYearValue(input);
  };

  const handleSizeInput = (event) => {
    let input = event.target.value;
    setSizeValue(input);
  };

  const faculties = getAllFaculties();

  const yearOptions = (() => {
    const yearsShown = 3
    let currentYear = new Date().getFullYear()
    let yearOptionComponents = []
    for (let i = 0; i < yearsShown; i++) {
      let year = currentYear + i
      yearOptionComponents.push(<option key={year} value={year}>{year}</option>)
    }
    return yearOptionComponents
  })()

  return (
    <div className="filterBar">
        <span>
        <label>Faculty</label>
            <select onChange={handleFacultyInput}>
              <option value="">All</option>
              {faculties.map(faculty => <option key={faculty.id} className={`faculty-${faculty.name}`} value={faculty.id}>{faculty.title}</option>)}
            </select>
        </span>    
        <span>
          <label>Stage</label>
              <select onChange={handleStageInput}>
                <option value="">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">7</option>
              </select>
        </span>
        <span>
          <label>Year</label>
              <select onChange={handleYearInput}>
                  {yearOptions}
              </select>
          </span>
        <span>
          <label>Results per page</label>
            <select onChange={handleSizeInput}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
        </span>
    </div>
  );
}

export default FilterBar;
