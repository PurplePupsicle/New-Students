var s1,s2,s3;
function setup() {
  createCanvas(400,400);
  s1 = new Student("John",12,6);
  s2 = new Student("Pearl",13,7);
  s3 = new Student("Stephen",14,7);
}

function draw() 
{
  background(30);
  s1.display();
  s2.display();
  s3.display();
}