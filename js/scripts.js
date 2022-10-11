// // Backend UI

var user = {
  userName: "user",
  userFemale: true,
  userWeight: 0,
  userBac: 0,
  userTime: 0,
  userShot: 0,
  userChampagne: 0,
  userVin: 0,
  userPinte: 0,
};
var updateUser = function() {
  if (document.getElementById("radioMale").checked = true) {
    user.userFemale = false;
  };
};

var updateBac = function() {
  if (user.userFemale) {
    user.userBac = ((0.118358 * (0.993822**(user.userWeight*2.2046))) * (user.userShot*1 + user.userChampagne*1 + user.userVin*1 + user.userPinte*3.6));
  } else {
    user.userBac = ((0.115943 * (0.993822**(user.userWeight*2.2046))) * (user.userShot*1 + user.userChampagne*1 + user.userVin*1 + user.userPinte*3.6));
  };
    user.userBac = (user.userBac - ((user.userTime / 40 * 0.01)));
};


// This function checks if you are under the legal limit to driveCheck

var driveCheck = function() {
  if (user.userBac <= 0.7) {
    console.log("User CAN drive");
    return true;
  } else {
    console.log("User CANNOT drive");
  };
};

// // Front End UI

$(document).ready(function() {
  $("button#sub-button").click(function(event) {
    event.preventDefault();

      user.userName = $("input#userName").val(),
      user.userWeight = $("input#userWeight").val(),
      user.userTime = $("input#userTime").val(),
      user.userShot = $("input#qty").val(),
      user.userChampagne = $("input#qty_2").val(),
      user.userVin = $("input#qty_3").val(),
      user.userPinte = $("input#qty_4").val(),
      updateUser();
      updateBac();
      driveCheck();
      if (driveCheck(true)) {
        $("#ok").show();
      } else $("#notok").show();
      $(".bac").text((user.userBac).toFixed(2));
      $("#survey").hide();
  })
})
