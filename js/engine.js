// Defining variables
var choices = ["3GB", "6GB", "15GB", "30GB"];

// var wolf_price;
var sub_total = 0;
var total = 0;

$(".hide_total").hide();
$("#payment").hide();

$(".wolf--price").click(function(event) {
   sub_total = 0;
   var wolf_gb = this.getAttribute("data-gb");

   var wolf_price = parseInt(this.getAttribute("data_price"));
   sub_total = sub_total + wolf_price;
   $("#sub--total").text(sub_total);
   console.log(sub_total);
   $("#payment").show();
   $(".hide_sub").show();
   $(".hide_total").hide();
});

$(".wolf--plan").click(function(event) {
  var wolf_month = parseInt(this.getAttribute("data-month"));
  total = sub_total * wolf_month;
  $("#total").text(total);
  console.log(total);
  $(".hide_total").show();
})
