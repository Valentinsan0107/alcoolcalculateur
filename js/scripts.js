var user = {
  userName: "user",
  userFemale: true,
  userJeunnon: true,
  userMedicnon: true,
  userWeight: 0,
  userBac: 0,
  userTime: 0,
  userAge : 0,
  userShot: 0,
  userChampagne: 0,
  userVin: 0,
  userPinte: 0,
  userDegVin: 0,
  userDegChampagne: 0,
  userDegShot: 0,
  userDegBiere: 0,
};
var updateUser_2 = function() {
  if (document.getElementById("radioJeunoui").checked = true) {
    user.userJeunnon = false;
  };
};

var updateUser = function() {
  if (document.getElementById("radioMale").checked = true) {
    user.userFemale = false;
  };
};

var updateBac = function() {
  if (user.userFemale = true) {
    user.userBac = ((0.118358 * (0.993822**(user.userWeight*2.2046))) * (user.userShot*1*(0.8*30*user.userDegShot/1000) + user.userChampagne*1*(0.8*100*user.userDegChampagne/1000) + user.userVin*1*(0.8*100*user.userDegVin/1000) + user.userPinte*1*(0.8*500*user.userDegBiere/1000)));
  } else {
    user.userBac = ((0.115943 * (0.993084**(user.userWeight*2.2046))) * (user.userShot*1*(0.8*30*user.userDegShot/1000) + user.userChampagne*1*(0.8*100*user.userDegChampagne/1000) + user.userVin*1*(0.8*100*user.userDegVin/1000) + user.userPinte*1*(0.8*500*user.userDegBiere/1000)));
  };
    user.userBac = (user.userBac - ((user.userTime / 40 * 0.01)));
};

var driveCheck = function() {
  if (user.userBac <= 0.2) {
    console.log("User CAN drive");
    return true;
  } else {
    console.log("User CANNOT drive");
  };
};

$(document).ready(function() {
  $("button#sub-button").click(function(event) {
    event.preventDefault();

      user.userName = $("input#userName").val(),
      user.userWeight = $("input#userWeight").val(),
      user.userTime = $("input#userTime").val(),
      user.userShot = $("input#qty").val(),
      user.userAge = $("input#userAge").val(),
      user.userChampagne = $("input#qty_2").val(),
      user.userVin = $("input#qty_3").val(),
      user.userPinte = $("input#qty_4").val(),
      user.userDegVin = $("input#userDegVin").val(),
      user.userDegShot = $("input#userDegShot").val(),
      user.userDegBiere = $("input#userDegBiere").val(),
      user.userDegChampagne = $("input#userDegChampagne").val(),
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
