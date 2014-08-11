google.load("visualization", "1", {packages:["corechart"]});
  var updateSpans = function(min, avg, max){
    $('.content.active').find('#min').fadeOut(0, function(){
      $('.content.active').find("#min").text(min).fadeIn(500);
    });$('.content.active').find('#avg').fadeOut(0, function(){
      $('.content.active').find("#avg").text(avg).fadeIn(500);
    });$('.content.active').find('#max').fadeOut(0, function(){
      $('.content.active').find("#max").text(max).fadeIn(500);
    });
  };
    function drawImpressionsVar(radioSelected){
      var radioSelected = $('ins.slider-level:hidden').data('radio');
      var dataDaily = google.visualization.arrayToDataTable([
        ['Hour', 'Impressions'],
        ['0',  0],
        ['2',  0],
        ['4',  0],
        ['6',  0],
        ['8',  0],
        ['10', 0],
        ['12', 0],
        ['14', 0],
        ['16', 0],
        ['18', 0],
        ['20', 0],
        ['22', 0],
        ['24', 0],
      ]);
      var dailyArray = [1,3,4,10,20,37,103,32,120,382,85,22,2];
      var dataWeekly = google.visualization.arrayToDataTable([
        ['Day', 'Impressions'],
        ['Mon', 0],
        ['Tue', 0],
        ['Wed', 0],
        ['Thu', 0],
        ['Fri', 0],
        ['Sat', 0],
        ['Sun', 0],
      ]);
      var weeklyArray = [1222,682,987,172,1042,2042,1529];
      var dataMonthly = google.visualization.arrayToDataTable([
        ['Week', 'Impressions'],
        ['Week 1', 0],
        ['Week 2', 0],
        ['Week 3', 0],
        ['Week 4', 0],
      ]);
      var monthlyArray = [5862,4209,2021,3673]
      var dataYearly = google.visualization.arrayToDataTable([
        ['Monthly', 'Impressions'],
        ['Jan', 0],
        ['Feb', 0],
        ['Mar', 0],
        ['Apr', 0],
        ['May', 0],
        ['Jun', 0],
        ['Jul', 0],
        ['Aug', 0],
        ['Sep', 0],
        ['Oct', 0],
        ['Nov', 0],
        ['Dec', 0],
      ]);
      var yearlyArray = [32000,12220,6820,9870,1720,10420,20420,1529,10293,9852,20482,45000]
      if(radioSelected==="daily"){
        var data = dataDaily;
        var arr = dailyArray;
        var calculatedMaxValue = Math.max.apply(null, dailyArray);
        var calculatedMinValue = Math.min.apply(null, dailyArray);
        var calculatedAvgValue = Math.round((arr.sum()/arr.length));
      }
      if(radioSelected==="weekly"){
        var data = dataWeekly;
        var arr = weeklyArray;
        var calculatedMaxValue = Math.max.apply(null, weeklyArray);
        var calculatedMinValue = Math.min.apply(null, weeklyArray);
        var calculatedAvgValue = Math.round((arr.sum()/arr.length));
      }
      if(radioSelected==="yearly"){
        var data = dataYearly;
        var arr =  yearlyArray;
        var calculatedMaxValue = Math.max.apply(null, yearlyArray); 
        var calculatedMinValue = Math.min.apply(null, yearlyArray);
        var calculatedAvgValue = Math.round((arr.sum()/arr.length)); 
      }
      if(radioSelected==="monthly"){
        var data = dataMonthly;
        var arr = monthlyArray;
        var calculatedMaxValue = Math.max.apply(null, monthlyArray); 
        var calculatedMinValue = Math.min.apply(null, monthlyArray);
        var calculatedAvgValue = Math.round((arr.sum()/arr.length)); 
      }
      var options = {
      title: 'Impressions',
      vAxis: {minValue: 0, maxValue: calculatedMaxValue},
      hAxis: {minValue: 0},
      height: 500,
      colors: ["#AAA"],
      legend: {position: 'none'},
      animation: {
        duration: 750,
        },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById('impression-charts'));
      chart.draw(data, options);
      var row=0;
      for (var i = 0; i < arr.length; i++) {
        data.setValue(row, 1, arr[i]);
        row++;
      };
      chart.draw(data, options);
      $(function(){
      updateSpans(calculatedMaxValue,calculatedAvgValue,calculatedMinValue)
      });
    }
      function drawUserActivity(radioSelected){
        var radioSelected = $('ins.slider-level:hidden').data('radio');
        var dataDaily = google.visualization.arrayToDataTable([
          ['Hour', 'Impressions'],
          ['0',  0],
          ['2',  0],
          ['4',  0],
          ['6',  0],
          ['8',  0],
          ['10', 0],
          ['12', 0],
          ['14', 0],
          ['16', 0],
          ['18', 0],
          ['20', 0],
          ['22', 0],
          ['24', 0],
        ]);
        var dailyArray = [1,3,4,10,20,37,103,32,120,382,85,22,2];
        var dataWeekly = google.visualization.arrayToDataTable([
          ['Day', 'Impressions'],
          ['Mon', 0],
          ['Tue', 0],
          ['Wed', 0],
          ['Thu', 0],
          ['Fri', 0],
          ['Sat', 0],
          ['Sun', 0],
        ]);
        var weeklyArray = [1222,682,987,172,1042,2042,1529];
        var dataMonthly = google.visualization.arrayToDataTable([
          ['Week', 'Impressions'],
          ['Week 1', 0],
          ['Week 2', 0],
          ['Week 3', 0],
          ['Week 4', 0],
        ]);
        var monthlyArray = [5862,4209,2021,3673]
        var dataYearly = google.visualization.arrayToDataTable([
          ['Monthly', 'Impressions'],
          ['Jan', 0],
          ['Feb', 0],
          ['Mar', 0],
          ['Apr', 0],
          ['May', 0],
          ['Jun', 0],
          ['Jul', 0],
          ['Aug', 0],
          ['Sep', 0],
          ['Oct', 0],
          ['Nov', 0],
          ['Dec', 0],
        ]);
        var yearlyArray = [32000,12220,6820,9870,1720,10420,20420,1529,10293,9852,20482,45000]
        if(radioSelected==="daily"){
          var data = dataDaily;
          var arr = dailyArray;
          var calculatedMaxValue = Math.max.apply(null, dailyArray)
          var calculatedMinValue = Math.min.apply(null, dailyArray);
          var calculatedAvgValue = Math.round((arr.sum()/arr.length)); 
        }
        if(radioSelected==="weekly"){
          var data = dataWeekly;
          var arr = weeklyArray;
          var calculatedMaxValue = Math.max.apply(null, weeklyArray)
          var calculatedMinValue = Math.min.apply(null, weeklyArray);
          var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
        }
        if(radioSelected==="yearly"){
          var data = dataYearly;
          var arr =  yearlyArray;
          var calculatedMaxValue = Math.max.apply(null, yearlyArray)
          var calculatedMinValue = Math.min.apply(null, yearlyArray);
          var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
        }
        if(radioSelected==="monthly"){
          var data = dataMonthly;
          var arr = monthlyArray;
          var calculatedMaxValue = Math.max.apply(null, monthlyArray)
          var calculatedMinValue = Math.min.apply(null, monthlyArray);
          var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
        }
        var options = {
        title: 'Online Users',
        vAxis: {minValue: 0, maxValue: calculatedMaxValue},
        hAxis: {minValue: 0},
        height: 500,
        colors: ["#aaa"],
        legend: {position: 'none'},
        animation: {
          duration: 750,
          },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById('user-activity-charts'));
        chart.draw(data, options);
        var row=0;
        for (var i = 0; i < arr.length; i++) {
          data.setValue(row, 1, arr[i]);
          row++;
        };
        chart.draw(data, options);
        updateSpans(calculatedMaxValue,calculatedAvgValue,calculatedMinValue)
    }
      function drawRegisteredUsers(radioSelected){
        var radioSelected = $('ins.slider-level:hidden').data('radio');
        var dataDaily = google.visualization.arrayToDataTable([
          ['Hour', 'Impressions'],
          ['0',  0],
          ['2',  0],
          ['4',  0],
          ['6',  0],
          ['8',  0],
          ['10', 0],
          ['12', 0],
          ['14', 0],
          ['16', 0],
          ['18', 0],
          ['20', 0],
          ['22', 0],
          ['24', 0],
        ]);
        var dailyArray = [1,3,4,10,20,37,103,32,120,382,85,22,2];
        var dataWeekly = google.visualization.arrayToDataTable([
          ['Day', 'Impressions'],
          ['Mon', 0],
          ['Tue', 0],
          ['Wed', 0],
          ['Thu', 0],
          ['Fri', 0],
          ['Sat', 0],
          ['Sun', 0],
        ]);
        var weeklyArray = [1222,682,987,172,1042,2042,1529];
        var dataMonthly = google.visualization.arrayToDataTable([
          ['Week', 'Impressions'],
          ['Week 1', 0],
          ['Week 2', 0],
          ['Week 3', 0],
          ['Week 4', 0],
        ]);
        var monthlyArray = [5862,4209,2021,3673]
        var dataYearly = google.visualization.arrayToDataTable([
          ['Monthly', 'Impressions'],
          ['Jan', 0],
          ['Feb', 0],
          ['Mar', 0],
          ['Apr', 0],
          ['May', 0],
          ['Jun', 0],
          ['Jul', 0],
          ['Aug', 0],
          ['Sep', 0],
          ['Oct', 0],
          ['Nov', 0],
          ['Dec', 0],
        ]);
        var yearlyArray = [32000,12220,6820,9870,1720,10420,20420,1529,10293,9852,20482,45000]
        if(radioSelected==="daily"){
          var data = dataDaily;
          var arr = dailyArray;
          var calculatedMaxValue = Math.max.apply(null, dailyArray)
          var calculatedMinValue = Math.min.apply(null, dailyArray)
          var calculatedAvgValue = Math.round((arr.sum()/arr.length));  

        }
        if(radioSelected==="weekly"){
          var data = dataWeekly;
          var arr = weeklyArray;
          var calculatedMaxValue = Math.max.apply(null, weeklyArray)
          var calculatedMinValue = Math.min.apply(null, weeklyArray)
          var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
 
        }
        if(radioSelected==="yearly"){
          var data = dataYearly;
          var arr =  yearlyArray;
          var calculatedMaxValue = Math.max.apply(null, yearlyArray)
          var calculatedMinValue = Math.min.apply(null, yearlyArray)
          var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
 
        }
        if(radioSelected==="monthly"){
          var data = dataMonthly;
          var arr = monthlyArray;
          var calculatedMaxValue = Math.max.apply(null, monthlyArray)
          var calculatedMinValue = Math.min.apply(null, monthlyArray)
          var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
 
        }
        var options = {
        title: 'User Registration',
        vAxis: {minValue: 0, maxValue: calculatedMaxValue},
        hAxis: {minValue: 0},
        height: 500,
        colors: ["#aaa"],
        legend: {position: 'none'},
        animation: {
          duration: 750,
          },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById('registered-users-charts'));
        chart.draw(data, options);
        var row=0;
        for (var i = 0; i < arr.length; i++) {
          data.setValue(row, 1, arr[i]);
          row++;
        };
        chart.draw(data, options);
        updateSpans(calculatedMaxValue,calculatedAvgValue,calculatedMinValue);
      }
        function drawTraffic(radioSelected){
          var radioSelected = $('ins.slider-level:hidden').data('radio');
          var dataDaily = google.visualization.arrayToDataTable([
            ['Hour', 'Impressions'],
            ['0',  0],
            ['2',  0],
            ['4',  0],
            ['6',  0],
            ['8',  0],
            ['10', 0],
            ['12', 0],
            ['14', 0],
            ['16', 0],
            ['18', 0],
            ['20', 0],
            ['22', 0],
            ['24', 0],
          ]);
          var dailyArray = [1,3,4,10,20,37,103,32,120,382,85,22,2];
          var dataWeekly = google.visualization.arrayToDataTable([
            ['Day', 'Impressions'],
            ['Mon', 0],
            ['Tue', 0],
            ['Wed', 0],
            ['Thu', 0],
            ['Fri', 0],
            ['Sat', 0],
            ['Sun', 0],
          ]);
          var weeklyArray = [1222,682,987,172,1042,2042,1529];
          var dataMonthly = google.visualization.arrayToDataTable([
            ['Week', 'Impressions'],
            ['Week 1', 0],
            ['Week 2', 0],
            ['Week 3', 0],
            ['Week 4', 0],
          ]);
          var monthlyArray = [5862,4209,2021,3673]
          var dataYearly = google.visualization.arrayToDataTable([
            ['Monthly', 'Impressions'],
            ['Jan', 0],
            ['Feb', 0],
            ['Mar', 0],
            ['Apr', 0],
            ['May', 0],
            ['Jun', 0],
            ['Jul', 0],
            ['Aug', 0],
            ['Sep', 0],
            ['Oct', 0],
            ['Nov', 0],
            ['Dec', 0],
          ]);
          var yearlyArray = [32000,12220,6820,9870,1720,10420,20420,1529,10293,9852,20482,45000]
          if(radioSelected==="daily"){
            var data = dataDaily;
            var arr = dailyArray;
            var calculatedMaxValue = Math.max.apply(null, dailyArray)
            var calculatedMinValue = Math.min.apply(null, dailyArray)
            var calculatedAvgValue = Math.round((arr.sum()/arr.length));  

          }
          if(radioSelected==="weekly"){
            var data = dataWeekly;
            var arr = weeklyArray;
            var calculatedMaxValue = Math.max.apply(null, weeklyArray)
            var calculatedMinValue = Math.min.apply(null, weeklyArray)
            var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
 
          }
          if(radioSelected==="yearly"){
            var data = dataYearly;
            var arr =  yearlyArray;
            var calculatedMaxValue = Math.max.apply(null, yearlyArray)
            var calculatedMinValue = Math.min.apply(null, yearlyArray)
            var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
 
          }
          if(radioSelected==="monthly"){
            var data = dataMonthly;
            var arr = monthlyArray;
            var calculatedMaxValue = Math.max.apply(null, monthlyArray)
            var calculatedMinValue = Math.min.apply(null, monthlyArray)
            var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
 
          }
          var options = {
          title: 'Traffic',
          vAxis: {minValue: 0, maxValue: calculatedMaxValue},
          hAxis: {minValue: 0},
          colors: ["#aaa"],
          height: 500,
          legend: {position: 'none'},
          animation: {
            duration: 750,
            },
          };
          var chart = new google.visualization.ColumnChart(document.getElementById('traffic-charts'));
          chart.draw(data, options);
          var row=0;
          for (var i = 0; i < arr.length; i++) {
            data.setValue(row, 1, arr[i]);
            row++;
          };
          chart.draw(data, options);
          updateSpans(calculatedMaxValue,calculatedAvgValue,calculatedMinValue)
        }
        function drawLogin(radioSelected){
          var radioSelected = $('ins.slider-level:hidden').data('radio');
          var dataDaily = google.visualization.arrayToDataTable([
            ['Hour', 'Impressions'],
            ['0',  0],
            ['2',  0],
            ['4',  0],
            ['6',  0],
            ['8',  0],
            ['10', 0],
            ['12', 0],
            ['14', 0],
            ['16', 0],
            ['18', 0],
            ['20', 0],
            ['22', 0],
            ['24', 0],
          ]);
          var dailyArray = [1,3,4,10,20,37,103,32,120,382,85,22,2];
          var dataWeekly = google.visualization.arrayToDataTable([
            ['Day', 'Impressions'],
            ['Mon', 0],
            ['Tue', 0],
            ['Wed', 0],
            ['Thu', 0],
            ['Fri', 0],
            ['Sat', 0],
            ['Sun', 0],
          ]);
          var weeklyArray = [1222,682,987,172,1042,2042,1529];
          var dataMonthly = google.visualization.arrayToDataTable([
            ['Week', 'Impressions'],
            ['Week 1', 0],
            ['Week 2', 0],
            ['Week 3', 0],
            ['Week 4', 0],
          ]);
          var monthlyArray = [5862,4209,2021,3673]
          var dataYearly = google.visualization.arrayToDataTable([
            ['Monthly', 'Impressions'],
            ['Jan', 0],
            ['Feb', 0],
            ['Mar', 0],
            ['Apr', 0],
            ['May', 0],
            ['Jun', 0],
            ['Jul', 0],
            ['Aug', 0],
            ['Sep', 0],
            ['Oct', 0],
            ['Nov', 0],
            ['Dec', 0],
          ]);
          var yearlyArray = [32000,12220,6820,9870,1720,10420,20420,1529,10293,9852,20482,45000]
          if(radioSelected==="daily"){
            var data = dataDaily;
            var arr = dailyArray;
            var calculatedMaxValue = Math.max.apply(null, dailyArray)
            var calculatedMinValue = Math.min.apply(null, dailyArray)
            var calculatedAvgValue = Math.round((arr.sum()/arr.length));  

          }
          if(radioSelected==="weekly"){
            var data = dataWeekly;
            var arr = weeklyArray;
            var calculatedMaxValue = Math.max.apply(null, weeklyArray) 
            var calculatedMinValue = Math.min.apply(null, weeklyArray) 
            var calculatedAvgValue = Math.round((arr.sum()/arr.length));  

          }
          if(radioSelected==="yearly"){
            var data = dataYearly;
            var arr =  yearlyArray;
            var calculatedMaxValue = Math.max.apply(null, yearlyArray) 
            var calculatedMinValue = Math.min.apply(null, yearlyArray)
            var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
 
          }
          if(radioSelected==="monthly"){
            var data = dataMonthly;
            var arr = monthlyArray;
            var calculatedMaxValue = Math.max.apply(null, monthlyArray) 
            var calculatedMinValue = Math.min.apply(null, monthlyArray)
            var calculatedAvgValue = Math.round((arr.sum()/arr.length));  
 
          }
          var options = {
          title: 'User Logins',
          vAxis: {minValue: 0, maxValue: calculatedMaxValue},
          hAxis: {minValue: 0},
          height: 500,
          colors: ["#aaa"],
          legend: {position: 'none'},
          animation: {
            duration: 750,
            },
          };
          var chart = new google.visualization.ColumnChart(document.getElementById('login-charts'));
          chart.draw(data, options);
          var row=0;
          for (var i = 0; i < arr.length; i++) {
            data.setValue(row, 1, arr[i]);
            row++;
          };
          chart.draw(data, options);
          updateSpans(calculatedMaxValue,calculatedAvgValue,calculatedMinValue)
        }

 
 $(window).resize(function (event) {
    var radioSelected = $('ins.slider-level:hidden').data('radio');
    drawImpressionsVar(radioSelected);
  });