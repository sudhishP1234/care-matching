import React, { useState } from 'react';

const DistanceConverter = () => {
  const [distance, setDistance] = useState('');
  const [inputUnit, setInputUnit] = useState('miles');
  const [outputUnit, setOutputUnit] = useState('kilometers');
  const [convertedDistance, setConvertedDistance] = useState('');

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  const handleInputUnitChange = (event) => {
    setInputUnit(event.target.value);
  };

  const handleOutputUnitChange = (event) => {
    setOutputUnit(event.target.value);
  };

  const convertDistance = () => {
    if (inputUnit === 'miles' && outputUnit === 'kilometers') {
      setConvertedDistance(parseFloat(distance) * 1.60934);
    } else if (inputUnit === 'kilometers' && outputUnit === 'miles') {
      setConvertedDistance(parseFloat(distance) / 1.60934);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    convertDistance();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Distance:
        <input type="number" value={distance} onChange={handleDistanceChange} />
      </label>
      <label>
        Input Unit:
        <select value={inputUnit} onChange={handleInputUnitChange}>
          <option value="miles">Miles</option>
          <option value="kilometers">Kilometers</option>
        </select>
      </label>
      <label>
        Output Unit:
        <select value={outputUnit} onChange={handleOutputUnitChange}>
          <option value="miles">Miles</option>
          <option value="kilometers">Kilometers</option>
        </select>
      </label>
      <button type="submit">Convert</button>
      {convertedDistance && (
        <p>
          Converted Distance: {convertedDistance.toFixed(2)} {outputUnit}
        </p>
      )}
    </form>
  );
};

export default DistanceConverter;
