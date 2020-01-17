var Sort;

Sort = function(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
};

Sort.prototype.getColumn = function() {
  return this.a.columns[this.b];
};
