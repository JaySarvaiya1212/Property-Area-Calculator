const Calculate = ({
  inputNumber,
  inputUnit,
  outputUnit,
  setCalculatedFigure,
}) => {
  const convertedSqft = {
    Sq_ft: 1,
    Sqyrd: 9,
    Bigha: 26910.66,
    Sq_m: 10.76,
    Acre: 43560.82,
    Hectare: 107642.63,
    Marla: 58118.41,
    Kanal: 5445.21,
    Biswa1: 3751130.25,
    Biswa2: 5861130.25,
    Are: 11582.35,
    Ground: 25833.15,
    Anikadam: 774.91,
    Rood: 117244.35,
    Chatak: 4843.81,
    Kotah: 719.91,
    Guntha: 11721.21,
    Perch: 2931.11,
    Cent: 435.61,
  };

  const Sqft = convertedSqft[inputUnit] * inputNumber;

  if (outputUnit === 'Sq_ft') {
    setCalculatedFigure(Sqft);
  } else if (outputUnit === 'Sqyrd') {
    // To make the output to have only 4 decimal places
    // const ans = (1 / 9) * Sqft;
    // setCalculatedFigure(ans.toFixed(4));
    setCalculatedFigure(Sqft * (1 / 9));
  } else if (outputUnit === 'Bigha') {
    setCalculatedFigure(Sqft * (1 / 26910.66));
  } else if (outputUnit === 'Sq_m') {
    setCalculatedFigure(Sqft * (1 / 10.76));
  } else if (outputUnit === 'Acre') {
    setCalculatedFigure(Sqft * (1 / 43560.82));
  } else if (outputUnit === 'Hectare') {
    setCalculatedFigure(Sqft * (1 / 107642.63));
  } else if (outputUnit === 'Marla') {
    setCalculatedFigure(Sqft * (1 / 58118.41));
  } else if (outputUnit === 'Kanal') {
    setCalculatedFigure(Sqft * (1 / 5445.21));
  } else if (outputUnit === 'Biswa1') {
    setCalculatedFigure(Sqft * (1 / 3751130.25));
  } else if (outputUnit === 'Biswa2') {
    setCalculatedFigure(Sqft * (1 / 5861130.25));
  } else if (outputUnit === 'Are') {
    setCalculatedFigure(Sqft * (1 / 11582.35));
  } else if (outputUnit === 'Ground') {
    setCalculatedFigure(Sqft * (1 / 25833.15));
  } else if (outputUnit === 'Anikadam') {
    setCalculatedFigure(Sqft * (1 / 774.91));
  } else if (outputUnit === 'Rood') {
    setCalculatedFigure(Sqft * (1 / 117244.35));
  } else if (outputUnit === 'Chatak') {
    setCalculatedFigure(Sqft * (1 / 4843.81));
  } else if (outputUnit === 'Kotah') {
    setCalculatedFigure(Sqft * (1 / 719.91));
  } else if (outputUnit === 'Guntha') {
    setCalculatedFigure(Sqft * (1 / 11721.21));
  } else if (outputUnit === 'Perch') {
    setCalculatedFigure(Sqft * (1 / 2931.11));
  } else if (outputUnit === 'Cent') {
    setCalculatedFigure(Sqft * (1 / 435.61));
  }
};

export default Calculate;
