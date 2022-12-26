song="";
song1="";
function preload(){
song=loadSound("music3_3.mp3");
song1=loadSound("music1_1.mp3");

}
function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);



}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
    
        righWristX=results[0].pose.righWrist.x;
        righWristY=results[0].pose.righWrist.y;
    }
    }
function draw(){
   image(video,0,0,600,500);


}
function play(){
    song.play();
   

}