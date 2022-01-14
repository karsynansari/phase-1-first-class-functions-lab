// const returnFirstTwoDrivers = (drivers) => {
//   return drivers.slice(0, 2);
// };

// const returnLastTwoDrivers = (drivers) => {
//   const length = drivers.length;
//   return drivers.slice(-2);
// };

// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// const fareMultiplier = (multiplier) => {
//   return (fare) => {
//     return fare * multiplier;
//   };
// };

const returnFirstTwoDrivers = function (arrayOfDrivers) {
  return arrayOfDrivers.slice(0, 2);
};

const returnLastTwoDrivers = function (arrayOfDrivers) {
  return arrayOfDrivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return (fare) => {
    return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);
fareDoubler(10);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, selectDriversFunction) {
  return selectDriversFunction(arrayOfDrivers);
}
