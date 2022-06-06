import React, { useState } from 'react';
import Calculate from './Calculate';
import './Calculator.css';

const Calculator = () => {
  const [inputNumber, setInputNumber] = useState(1);
  const [inputUnit, setInputUnit] = useState('Sq_ft');
  const [outputUnit, setOutputUnit] = useState('Sq_ft');
  const [calculatedFigure, setCalculatedFigure] = useState();

  const handleInputChange = (e) => {
    setInputNumber(e.target.value);
  };

  const handleInputSelect = (e) => {
    setInputUnit(e.target.value);
  };

  const handleOutputSelect = (e) => {
    setOutputUnit(e.target.value);
  };

  return (
    <div className='container'>
      <form>
        <div className='row'>
          <div className='col-25'>
            <label htmlFor='fname'>Enter a number</label>
          </div>
          <div className='col-25'>
            <label htmlFor='lname'>Converted Figure</label>
          </div>
        </div>

        <div className='row'>
          <div className='col-25'>
            <input
              type='number'
              value={inputNumber}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className='col-25'>
            <input
              disabled
              value={calculatedFigure}
              className='converted-figure'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-25'>
            <select onChange={(e) => handleInputSelect(e)}>
              <option value='Sq_ft'>Sq_ft</option>
              <option value='Sqyrd'>Sqyrd</option>
              <option value='Bigha'>Bigha</option>
              <option value='Sq_m'>Sq_m</option>
              <option value='Acre'>Acre</option>
              <option value='Hectare'>Hectare</option>
              <option value='Marla'>Marla</option>
              <option value='Kanal'>Kanal</option>
              <option value='Biswa1'>Biswa1</option>
              <option value='Biswa2'>Biswa2</option>
              <option value='Are'>Are</option>
              <option value='Ground'>Ground</option>
              <option value='Anikadam'>Anikadam</option>
              <option value='Rood'>Rood</option>
              <option value='Chatak'>Chatak</option>
              <option value='Kotah'>Kotah</option>
              <option value='Guntha'>Guntha</option>
              <option value='Perch'>Perch</option>
              <option value='Cent'>Cent</option>
            </select>
          </div>
          <div className='col-25'>
            <select onChange={(e) => handleOutputSelect(e)}>
              <option value='Sq_ft'>Sq_ft</option>
              <option value='Sqyrd'>Sqyrd</option>
              <option value='Bigha'>Bigha</option>
              <option value='Sq_m'>Sq_m</option>
              <option value='Acre'>Acre</option>
              <option value='Hectare'>Hectare</option>
              <option value='Marla'>Marla</option>
              <option value='Kanal'>Kanal</option>
              <option value='Biswa1'>Biswa1</option>
              <option value='Biswa2'>Biswa2</option>
              <option value='Are'>Are</option>
              <option value='Ground'>Ground</option>
              <option value='Anikadam'>Anikadam</option>
              <option value='Rood'>Rood</option>
              <option value='Chatak'>Chatak</option>
              <option value='Kotah'>Kotah</option>
              <option value='Guntha'>Guntha</option>
              <option value='Perch'>Perch</option>
              <option value='Cent'>Cent</option>
            </select>
          </div>
        </div>
      </form>
      <Calculate
        inputNumber={inputNumber}
        inputUnit={inputUnit}
        outputUnit={outputUnit}
        setCalculatedFigure={setCalculatedFigure}
      />
    </div>
  );
};

export default Calculator;
