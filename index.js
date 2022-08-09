
$(".bill-input").change(function() {
  var bill = $(".bill-input").val();
  $(".bill-input").attr("value", bill);


  tipPerPerson(); // spusti funkciu tipPerPerson ked clovek vyplni/zmeni bill
  totalPerson();
})


//Ked clovek klikne na preddefinovane % tipu
$(".btn").on("click", function() {
  $(".btn").removeClass("clicked"); // odoberieme class clicked, aby sme nemali vybratych viac moznosti
  $(this).addClass("clicked"); // tam kde clovek klikol tu class pridame
  var tip = $(this).val(); // tieto posledne tri riadky nam vlastne ani netreba lebo my uz mame v html v attribute value tu hodnotu, ale nic sa nestane ak to tam teraz ostane, pre istotu
  $(this).attr("value", tip);
  if($(".bill-input").val().length===0) {
  $(".bill-input").addClass("no-input");
}
if($(".nmb-people").val().length===0) {
$(".nmb-people").addClass("no-input");

}

  tipPerPerson(); //spusti funkciu tipPerPerson ked clovek klikne na tip button
  totalPerson();

})


// Custom tip
$(".bot-width").change(function(){
  $(".btn").removeClass("clicked"); //odoberieme class .clicked z ostatnych veci ,kedze ak je custom tip vyplneny berieme ten a ignorujeme tie buttons
  $(".bot-width").addClass("clicked"); //pridame tu class .clicked na ten custom tip, aby to fungovalo v tej kalkulacke, ze berieme value toho custom tip
  var customTip = "0." + $(".bot-width").val(); //zmenime to na format 0.nieco, aby sme mohli lahko ratat ten tip
  $(".bot-width").attr("value", customTip); //zapiseme tu value do attribute value

  tipPerPerson(); //spusti funkciu tipPerPerson ked clovek vyplni custom tip
  totalPerson();


})


// Vytvorime var numberofPeople, kde ulozime to co clove napisal do Number of people
$(".nmb-people").change(function() {
  var numberofpeople = $(".nmb-people").val();
  $(".nmb-people").attr("value", numberofpeople);

  tipPerPerson(); // spusti funkciu ked clovek vyplni/zmeni pocet osob
  totalPerson();
})

function tipPerPerson() {
  var tipPerson = (($(".bill-input").attr("value") * $(".clicked").attr("value")) / $(".nmb-people").attr("value")).toFixed(2);
  $(".tip-amount").text(tipPerson);
}



// ta prva cast, ($(".bill-input").attr("value") / $(".nmb-people").attr("value")), berie bill a vydeli poctom ludi, potom je + a za tym je vypocet tip per person zobraty z funkcie predoslej
function totalPerson() {
  var totalPerPerson = (($(".bill-input").attr("value") / $(".nmb-people").attr("value")) + (($(".bill-input").attr("value") * $(".clicked").attr("value")) / $(".nmb-people").attr("value"))).toFixed(2);
  $(".tipAll").text(totalPerPerson);

}
