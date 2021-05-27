class Ground{

        constructor (x , y , width , height){


            var option ={
                isStatic : true,
            }

            this.body2 = Bodies.rectangle(x , y , width , height,option);
            this.width = width;
            this.height = height;
            World.add(world,this.body2);



        }

            display(){

                var Gpos = this.body2.position;
                rectMode(CENTER);
                fill("green");
                rect(Gpos.x,Gpos.y,this.width,this.height);

            }
       

}