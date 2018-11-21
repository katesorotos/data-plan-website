// Defining variables
var choices = ["3GB", "6GB", "15GB", "30GB"];

// var wolf_price;
var sub_total = 0;
var total = 0;
var sub_total_2 = 0;

$(".hide_total").hide();
$("#payment").hide();

$(".wolf--price").click(function(event) {
   sub_total = 0;
   var wolf_gb = this.getAttribute("data-gb");

   var wolf_price = parseInt(this.getAttribute("data_price"));
   sub_total = sub_total + wolf_price;
   $("#sub--total").text(sub_total);
   console.log('sub_total ' +sub_total);
   $("#payment").show();
   $(".hide_sub").show();
   $(".hide_total").hide();
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
   console.log('sub '+sub_total);
    $("#mins").show();
    $(".sub_2").show();

    $("#sub--total_2").empty();
   // $(".hide_total").hide();
});

// Mins
$(".chatter--mins").click(function(event) {
   sub_total_2 = 0;
   var chatter_mins = this.getAttribute("data-mins");

   var chatter_mins_price = parseInt(this.getAttribute("data_mins_price"));
   sub_total_2 = sub_total + chatter_mins_price;
   $("#sub--total_2").text(sub_total_2);
   console.log('min sub ' +sub_total);
   console.log('sub2 ' +sub_total_2);
   // $("#sub_1").hide();
   $("#sub_2").show();
   // $(".hide_total").hide();
});

// Monthly/Annually
$(".chatter--mins").click(function(event) {
   sub_total_2 = 0;
   var chatter_mins = this.getAttribute("data-mins");

   var chatter_mins_price = parseInt(this.getAttribute("data_mins_price"));
   sub_total_2 = sub_total + chatter_mins_price;
   $("#sub--total_2").text(sub_total_2);
   console.log('min sub ' +sub_total);
   console.log('sub2 ' +sub_total_2);
   // $("#sub_1").hide();
   $("#sub_2").show();
   // $(".hide_total").hide();
});


//
// $(".chatter--mins").click(function(event) {
//   var wolf_month = parseInt(this.getAttribute("data-month"));
//   total = sub_total * wolf_month;
//   $("#total").text(total);
//   console.log(total);
//   $(".hide_total").show();
// })
