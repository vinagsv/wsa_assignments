let rectangle = {
  width: 0,
  height: 0,

  area: function () {
    return this.width * this.height;
  },

  perimeter: function () {
    return 2 * (this.width + this.height);
  },
};

rectangle.width = parseFloat(prompt("Enter the width of the rectangle:"));
rectangle.height = parseFloat(prompt("Enter the height of the rectangle:"));

alert("Area: " + rectangle.area());
alert("Perimeter: " + rectangle.perimeter());
