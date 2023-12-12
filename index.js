function distanceFromHqInBlocks(destination){
    let result = (destination - 42)
    return(Math.abs(result))
};
function distanceFromHqInFeet(feet){
    return(distanceFromHqInBlocks(feet) * 264)
};
function distanceTravelledInFeet(pointA,pointB){
    let disCovered = (pointA - pointB)
    return(Math.abs(disCovered) * 264)
};
function calculatesFarePrice(pointX,pointY){
    let disInBlocks = Math.abs(pointX - pointY);
    let disTravelled = disInBlocks * 264;
    if(disTravelled <= 400){
        return(0)
    }
    else if(disTravelled > 400 && disTravelled < 2000){
        let calculableDistance = disTravelled - 400;
        return(calculableDistance * .02)
    }
    else if(disTravelled > 2000 && disTravelled < 2500){
        return(25)
    }
    else{
        return('cannot travel that far')
    }
};


// Code your solution in this file!
