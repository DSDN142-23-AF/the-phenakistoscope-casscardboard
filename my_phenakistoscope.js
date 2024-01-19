const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("Berry" , "png")
  pScope.load_image("STRAW" , "png")



}

function setup_layers(pScope){

  new PLayer(null, 214, 231, 255);  //bows //colour of the disk 
  var layer1 = new PLayer(faces);
  layer1.mode( SWIRL(1) ); // the amount of flowers on the sceen at once 
  layer1.set_boundary( 790,800 );


  var layer2 = new PLayer(Berry); ///BERRYS
  layer2.mode(SWIRL(4)); // the amount of flowers on the sceen at once 
  layer2.set_boundary( 0,0 );

  var layer3 = new PLayer(STRAW); ///BERRYS
  layer3.mode(SWIRL(3)); // the amount of flowers on the sceen at once 
  layer3.set_boundary( 500,1100 );
  



 
}

function bunnies(x, y, animation, pScope){
  scale(1);
  rotate(360+animation.frame)


 pScope.draw_image("bunnies",x,y);

}
function Berry(x, y, animation, pScope){
 rotate(360+animation.frame)
  scale(0.7);

 pScope.draw_image("Berry",x,y);
}

function STRAW(x, y, animation, pScope){
  scale(0.6+animation.frame);
  scale(0.2);

 pScope.draw_image("STRAW",x,y);
}







function faces(x, y, animation, pScope){// BOWS
  translate(340,100);
  scale(0.2)

  rotate(180+animation.frame);
  strokeWeight(10)
  stroke(255, 204, 231)
    fill(245, 159, 205)
   beginShape();// Pink bow
  
  
   curveVertex(140,340)
  curveVertex(94,254)
   curveVertex(70,150)
  curveVertex(163,134)
  
  
  
  
   curveVertex(332,248)
    curveVertex(441,379)
    curveVertex(595,564)
    curveVertex(592,596)
  
  
   curveVertex(513,492)
    curveVertex(361,370)
   curveVertex(221,236)
  curveVertex(200,300)
  
  
  
  
  curveVertex(246,355)
  
  
  curveVertex(386,379)
  
  
  curveVertex(320,440)
  curveVertex(213,416)
  
  
  
  
  endShape(CLOSE);
 
  endShape(CLOSE);

  strokeWeight(10)
  stroke(255, 204, 231)
   fill(245, 159, 205)
  beginShape();// right side of pink bow
  
  
  curveVertex(680,121)
  curveVertex(650,77)
  
  
  curveVertex(610,60)
  
  
  
  
  curveVertex(519,99)
  curveVertex(417,370)
  curveVertex(560,210)
  curveVertex(680,240)
  
  
  curveVertex(673,280)
  curveVertex(617,315)
  curveVertex(530,350)
  
  
  
  
  
  
  curveVertex(400,380)
  curveVertex(349,460)
   curveVertex(240,590)
  
  
  curveVertex(270,610)
  curveVertex(450,420)
  
  
  curveVertex(770,300)
  
  
  endShape(CLOSE);







strokeWeight(0)
stroke(5)
 fill(255, 204, 231)
beginShape();// Centre of the bow




curveVertex(365,400)
curveVertex(370,357)


curveVertex(406,350)


curveVertex(471,365)




curveVertex(472,424)
curveVertex(427,437)
curveVertex(370,436)




endShape(CLOSE);


}
