noseX=0;
noseY=0;
left_wristX=0;
right_wristX=0;
difference=0;
function setup()
{
    video= createCapture(VIDEO);
    video.size(580,500);
    canvas=createCanvas(500,425);
    canvas.position(700,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(noseX,noseY);
        left_wristX=results[0].pose.leftWrist.x;
        right_wristX=results[0].pose.rightWrist.x;
        difference=floor(left_wristX-right_wristX);
        console.log(difference);
    }
}

function draw()
{
    background("#000000");
    document.getElementById("text_side").innerHTML="Width and Height of the square wil be "+difference+"px";
    textSize(difference);
    fill("#ffcc66");
    text('Namish',50,250);
}