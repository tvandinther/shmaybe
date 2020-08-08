import { useState } from "react";

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
    <div>
      <span>
        <label>Faculty</label>
            <select onChange={handleFacultyInput}>
                <option value="Art">Art</option>
                <option value="Commerce">Commerce</option>
                <option value="Engineering">Engineering</option>
                <option value="Law">Law</option>
            </select>
        <label>Stage</label>
            <select onChange={handleStageInput}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="7">7</option>
            </select>
        <label>Year</label>
            <select onChange={handleYearInput}>
                {yearOptions}
            </select>
      </span>
    </div>
  );
}

export default FilterBar;
