const PointCalibrate = 0;
const CalibrationPoints = {};

// clears canvas and calibration
function ClearCanvas(){
  document.querySelectorAll('.Calibration').forEach((i) => {
    i.style.setProperty('display', 'none');
  });
  let canvas = document.getElementById("plotting_canvas");
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}

// show instructions in center of calibration screen
// TODO
function showInstructions() {

}

function calcAccuracy() {
    // makes the variables true for 5 seconds & plots the points
    store_points_variable(); // start storing the prediction points
    sleep(5000).then(() => {
        stop_storing_points_variable(); // stop storing the prediction points
        var past50 = webgazer.getStoredPoints(); // retrieve the stored points
        var precision_measurement = calculatePrecision(past50);
        var accuracyLabel = "<a>Accuracy | "+precision_measurement+"%</a>";
        document.getElementById("Accuracy").innerHTML = accuracyLabel; // Show the accuracy in the nav bar.
            swal({
                title: "Your accuracy measure is " + precision_measurement + "%",
                allowOutsideClick: false,
                buttons: {
                    cancel: "Recalibrate",
                    confirm: true,
                    }
                }).then(isConfirm => {
                        if (isConfirm){
                            //clear the calibration & hide the last middle button
                            ClearCanvas();
                        } else {
                            //use restart function to restart the calibration
                            document.getElementById("Accuracy").innerHTML = "<a>Not yet Calibrated</a>";
                            webgazer.clearData();
                            ClearCalibration();
                            ClearCanvas();
                            ShowCalibrationPoint();
                        }
                });
        });
    });
}


function calPointClick(node) {
    const id = node.id;

    if (!CalibrationPoints[id]){ // initializes if not done
        CalibrationPoints[id]=0;
    }
    CalibrationPoints[id]++; // increments values

    // fade calibration circle once done
    if (CalibrationPoints[id]==5){
        node.style.setProperty('opacity', '0%');
        node.setAttribute('disabled', 'disabled');
        PointCalibrate++;
    }else if (CalibrationPoints[id]<5){
        // Gradually increase the opacity of calibration points when click to give some indication to user.
        var opacity = 0.2 * CalibrationPoints[id] + 0.2;
        node.style.setProperty('opacity', opacity);
    }

    if (PointCalibrate >= 9){
        // grab every element in Calibration class and hide them.
        document.querySelectorAll('.Calibration').forEach((i) => {
            i.style.setProperty('display', 'none');
        });

        // clears the canvas
        var canvas = document.getElementById("plotting_canvas");
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

    }
}

/**
 * Load this function when the index page starts.
* This function listens for button clicks on the html page
* checks that all buttons have been clicked 5 times each, and then goes on to measuring the precision
*/
function docLoad() {
    ClearCanvas();
        
        // click event on the calibration buttons
        document.querySelectorAll('.Calibration').forEach((i) => {
            i.addEventListener('click', () => {
                calPointClick(i);
            })
        })
    };
    window.addEventListener('load', docLoad);

// Add overlay, setup calibration points
function ShowCalibrationPoint() {
    document.querySelectorAll('.Calibration').forEach((i) => {
      i.style.removeProperty('display');
    });
  }

function ClearCalibration(){
    // Clear data from WebGazer
    document.querySelectorAll('.Calibration').forEach((i) => {
      i.style.setProperty('background-color', 'red');
      i.style.setProperty('opacity', '0.2');
      i.removeAttribute('disabled');
    });
  
    CalibrationPoints = {};
    PointCalibrate = 0;
  }

// sleep function because java doesn't have one, sourced from http://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }