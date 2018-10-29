// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  return [array[0], array[1]]
}
const returnLastTwoDrivers = function (array) {
  return [array[array.length - 2], array[array.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function(integer) {
    return integer * integer
  }
}

function fareDoubler(fare) {
  return fare * 2
}

function fareTripler(fare) {
  return fare * 3
}

function fetchSpecifiedDrivers(arrayOfDrivers, funct) {
  return funct(arrayOfDrivers)
}
