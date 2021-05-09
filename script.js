// Calculates a booking rate quote from a form input
// Takes type, room, day, and length (hours) of booking
// Displays a quote on screen

// Key:value store to look-up rate (value) from type, room and day (key)
const TYPE_ROOM_DAY = {
    communitygroup_hall_weekday: 25,
    voluntaryorganisation_hall_weekday: 40,
    publicsector_hall_weekday: 55,
    commercialprivatehire_hall_weekday: 75,
    communitygroup_meetingsinglesmall_weekday: 15, 
    voluntaryorganisation_meetingsinglesmall_weekday: 20,
    publicsector_meetingsinglesmall_weekday: 25,
    commercialprivatehire_meetingsinglesmall_weekday: 30,
    communitygroup_meetingsinglelarge_weekday: 20,
    voluntaryorganisation_meetingsinglelarge_weekday: 25,
    publicsector_meetingsinglelarge_weekday: 30, 
    commercialprivatehire_meetingsinglelarge_weekday: 40,
    communitygroup_meetingdouble_weekday: 30,
    voluntaryorganisation_meetingdouble_weekday: 40,
    publicsector_meetingdouble_weekday: 50,
    commercialprivatehire_meetingdouble_weekday: 60,
    communitygroup_meetingtriple_weekday: 50,
    voluntaryorganisation_meetingtriple_weekday: 65,
    publicsector_meetingtriple_weekday: 80, 
    commercialprivatehire_meetingtriple_weekday: 95,
    communitygroup_hall_weekendholiday: 45,
    voluntaryorganisation_hall_weekendholiday: 60,
    publicsector_hall_weekendholiday: 75,
    commercialprivatehire_hall_weekendholiday: 75,
    communitygroup_meetingsinglesmall_weekendholiday: 20,
    voluntaryorganisation_meetingsinglesmall_weekendholiday: 30,
    publicsector_meetingsinglesmall_weekendholiday: 40,
    commercialprivatehire_meetingsinglesmall_weekendholiday: 40,
    communitygroup_meetingsinglelarge_weekendholiday: 25,
    voluntaryorganisation_meetingsinglelarge_weekendholiday: 35,
    publicsector_meetingsinglelarge_weekendholiday: 50,
    commercialprivatehire_meetingsinglelarge_weekendholiday: 50,
    communitygroup_meetingdouble_weekendholiday: 40,
    voluntaryorganisation_meetingdouble_weekendholiday: 60,
    publicsector_meetingdouble_weekendholiday: 70,
    commercialprivatehire_meetingdouble_weekendholiday: 80,
    communitygroup_meetingtriple_weekendholiday: 65,
    voluntaryorganisation_meetingtriple_weekendholiday: 85,
    publicsector_meetingtriple_weekendholiday: 95,
    commercialprivatehire_meetingtriple_weekendholiday: 110
};

// Button on the form: event type "click", specifies named function getQuote
document.getElementById("calculate").addEventListener("click", getQuote);

function getQuote() {
    // Get the values of the four inputs and store them in variables
    let myType = document.querySelector("input[name=rate]:checked").value;
    let myRoom = document.querySelector("input[name=room]:checked").value;
    let myDay = document.querySelector("input[name=day]:checked").value;
    let numHours = document.getElementById("hours").value;

    // Validate input
    if (myType === "") {
        alert("Please enter the booking type");
        return;
    }
    if (myRoom === "") {
        alert("Please choose a room");
        return;
    }
    if (myDay === "") {
        alert("Select weekday or weekend/holiday");
        return;
    }
    if (numHours === "" || numHours < 1 || numHours > 12) {
        alert("Choose length of time (maximum 12 hours)");
        return;
    }

    // Construct a key from booking type, room size, and day choices
    let myChoice = myType + "_" + myRoom + "_" + myDay;

    // Get value from myChoice key and multiply by number of hours for quote
    // Send quote ("total") as output to web page
    document.getElementById("total").innerHTML = TYPE_ROOM_DAY[myChoice] * numHours;
};

