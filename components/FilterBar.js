import { useState } from "react";
import { faculties } from "../tools/index.js";
import { getAllFaculties } from '../tools/index';

function FilterBar({setFacultyValue, setStageValue ,setYearValue }) {

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

  const faculties = getAllFaculties();
  console.log(faculties);

  return (
    <div>
      <span>
        <label>Faculty</label>
            <select onChange={handleFacultyInput}>
              {faculties.map(faculty => <option className={`faculty-${faculty.name}`} value={faculty.id}>{faculty.title}</option>)}
            </select>
        <label>Stage</label>
            <select onChange={handleStageInput}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="4">7</option>
            </select>
        <label>Year</label>
            <select onChange={handleYearInput}>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
            </select>
      </span>
    </div>
  );
}

export default FilterBar;
