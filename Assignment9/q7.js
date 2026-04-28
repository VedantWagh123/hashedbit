// Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).


function getArea(rect) {
  return rect.width * rect.height;
}

console.log(getArea({ width: 5, height: 10 }));