// Defining variables
var choices = ["3GB", "6GB", "15GB", "30GB"];

// var wolf_price;
var sub_total = 0;
var total = 0;
var sub_total_2 = 0;
var fam_total = 0;

$(".hide_total").hide();
$("#payment").hide();

$(".wolf--price").click(function(event) {
  sub_total = 0;
  var wolf_gb = this.getAttribute("data-gb");

  var wolf_price = parseInt(this.getAttribute("data_price"));
  sub_total = sub_total + wolf_price;
  $("#sub--total").text(sub_total);
  console.log('sub_total ' + sub_total);
  $("#payment").show();
  $(".hide_sub").show();
  $("#total").empty();
});

$(".wolf--plan").click(function(event) {
  var wolf_month = parseInt(this.getAttribute("data-month"));
  total = sub_total * wolf_month;
  $("#total").text(total);
  console.log('total ' + total);
  $(".hide_total").show();
})



// Chatterbox

$("#sub_2").hide();
$("#mins").hide();
$(".hide_total").hide();
$("#payment").hide();

// GB
$(".chatter--price").click(function(event) {
  sub_total = 0;
  var chatter_gb = this.getAttribute("data-gb");

  var chatter_price = parseInt(this.getAttribute("data_price"));
  sub_total = sub_total + chatter_price;
  $("#sub--total").text(sub_total);
  console.log('sub ' + sub_total);
  $("#mins").show();
  $(".sub_2").show();

  $("#sub--total_2").empty();
  $("#total").empty();
  // $(".hide_total").hide();
});

// Mins
$(".chatter--mins").click(function(event) {
  sub_total_2 = 0;
  var chatter_mins = this.getAttribute("data-mins");

  var chatter_mins_price = parseInt(this.getAttribute("data_mins_price"));
  sub_total_2 = sub_total + chatter_mins_price;
  $("#sub--total_2").text(sub_total_2);
  console.log('min sub ' + sub_total);
  console.log('sub2 ' + sub_total_2);
  // $("#sub_1").hide();
  $("#sub_2").show();
  $("#payment").show();
  $("#total").empty();
  // $(".hide_total").hide();
});

// Monthly/Annually
$(".chatter--plan").click(function(event) {
  var chatter_month = parseInt(this.getAttribute("data-month"));
  total = sub_total_2 * chatter_month;
  $("#total").text(total);
  console.log('total ' + total);
  $(".hide_total").show();
});

// Family
$("#family_gb").hide();
$("#payment").hide();

var fam_sim = 0;

// number of sim cards
$(".family--sim").click(function(event) {
  fam_sim = this.getAttribute("data_sim");
  $("#family_gb").show();
  console.log('famsim ca ' + fam_sim);
  $("#sub--total").empty();
})

// GB
$(".family--gb").click(function(event) {
  $("#sub--total").empty();
  var fam_gb = this.getAttribute("data-gb");
  $("#payment").show();
  console.log('famsim gb ' + fam_sim);
  fam_total = 0;

//one sim
  if ((fam_sim == "1") && (fam_gb == "1GB")) {
    fam_total = "14";
  } else if ((fam_sim == "1") && (fam_gb == "10GB")) {
    fam_total = "20";
  } else if ((fam_sim == "1") && (fam_gb == "20GB")) {
    fam_total = "30";
  } else if ((fam_sim == "1") && (fam_gb == "40GB")) {
    fam_total = "40";
  }

//two sims
  if ((fam_sim == "2") && (fam_gb == "1GB")) {
    fam_total = "21.20";
  } else if ((fam_sim == "2") && (fam_gb == "10GB")) {
    fam_total = "32";
  } else if ((fam_sim == "2") && (fam_gb == "20GB")) {
    fam_total = "50";
  } else if ((fam_sim == "2") && (fam_gb == "40GB")) {
    fam_total = "68";
  }

  //three sims
    if ((fam_sim == "3") && (fam_gb == "1GB")) {
      fam_total = "28.40";
    } else if ((fam_sim == "3") && (fam_gb == "10GB")) {
      fam_total = "44";
    } else if ((fam_sim == "3") && (fam_gb == "20GB")) {
      fam_total = "70";
    } else if ((fam_sim == "3") && (fam_gb == "40GB")) {
      fam_total = "96";
    }

    //four sims
      if ((fam_sim == "4") && (fam_gb == "1GB")) {
        fam_total = "35.60";
      } else if ((fam_sim == "4") && (fam_gb == "10GB")) {
        fam_total = "56";
      } else if ((fam_sim == "4") && (fam_gb == "20GB")) {
        fam_total = "90";
      } else if ((fam_sim == "4") && (fam_gb == "40GB")) {
        fam_total = "124";
      }

      //five sims
        if ((fam_sim == "5") && (fam_gb == "1GB")) {
          fam_total = "42.80";
        } else if ((fam_sim == "5") && (fam_gb == "10GB")) {
          fam_total = "68";
        } else if ((fam_sim == "5") && (fam_gb == "20GB")) {
          fam_total = "110";
        } else if ((fam_sim == "5") && (fam_gb == "40GB")) {
          fam_total = "152";
        }


  $("#sub--total").text(fam_total);
})
