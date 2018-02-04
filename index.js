function distanceFromHqInBlocks(blocks) {
  if (blocks > 42) {
    return blocks - 42;
  } else {
    return 42 - blocks;
  }
}
function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}
function distanceTravelledInFeet(beginning, destination) {
  if (beginning > destination) {
    return (beginning - destination) * 264;
  } else {
    return (destination - beginning) * 264;
  }
}
function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet < 400) {
    return 0;
  } else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet < 2000) {
    return distanceTravelledInFeet * .02;    
  } else {
    return "cannot travel that far";
  }
  }
}