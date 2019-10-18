class Circle{
  constructor(radius){
    this.radius = radius;
    this.diameter = getDiameter();
    this.circumference = getCircumference();
    this.area = getArea();
  }
  
  get diameter(){
    return this.radius * 2;
  }
  
  get circumference(){
    return 2 * Math.PI * this.radius;
  }
  
  get area(){
    return Math.PI *this.radius*this.radius
  }
  
  set diameter(diameter){
    this.diameter = diameter;
    this.radius = diameter/2;
  }
  
  set circumference(circum){
    this.circumference = circum;
    this.radius = circum/(2 * Math.PI)
  }
  
  set area(area){
    this.area = area;
    this.radius = Math.sqrt(area/Math.PI);
  }
}