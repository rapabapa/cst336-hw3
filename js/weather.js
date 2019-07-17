$("#errorMessage").hide();
$("#search").on("click", function() {
  if ($("#zipcode").val().length < 5) {
      $("#errorMessage").show();
  }
  else {
   
        $.ajax({
          method:"GET",
          url: "https://api.openweathermap.org/data/2.5/weather?zip=" + $("#zipcode").val() + ",us&appid=2a5add62540012ceb0cfd3370cba9680",
          dataType: "json",
          success: function(result,status) {
            //alert(result);
           

            // Convert from Kelvin
            var degreesF = Math.floor((result.main.temp - 273.15) * (9/5) + 32);

            $("#city").html(result.name);
            
           
            $("#temp").html(degreesF + ' degree');
          
            $("#hum").html(result.main.humidity);       
          },

        }); //ajax
      }
  });//zip