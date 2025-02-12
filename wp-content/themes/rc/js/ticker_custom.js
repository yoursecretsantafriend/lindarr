$(document).ready(function () { 
    $('.myTicker4').easyTicker({ 
      direction: 'up', 
      easing: 'swing', 
      speed: 'slow', 
      interval: 2000, 
      height: 'auto', 
      visible: 0, 
      mousePause: true, 
      controls: { 
        up: '.up', 
        down: '.down' 

      }, 
      callbacks: { 
        before: function (ul, li) { 
          $(li).css('color', 'red'); 
        }, 
        after: function (ul, li) { 
          $(li).css('color', '#e63c3c'); 
        } 
      } 
    }); 

    addVar = 1; 
    $('.add').click(function () { 
      $('.myTicker4 ul').append( 
        '<li>' + addVar + ':' + 'ADDED TEXT ' + 
        'As the placement season is back ' + 
        'GeeksforGeeks is here to help you ' + 
        'crack the interview</li>'); 
      addVar++; 
    }); 

    var ticker = $('.myTicker4') 
      .easyTicker() 
      .data('easyTicker'); 
    $('.up').click(function () { 
      ticker.up(); 
    }); 

    $('.down').click(function () { 
      ticker.down(); 
    }); 

    $('.myTicker2').easyTicker({ 
      direction: 'up', 
      easing: 'swing', 
      speed: 'slow', 
      interval: 2000, 
      height: 'auto', 
      visible: 0, 
      mousePause: true, 
      controls: { 
        up: '.up', 
        down: '.down' 

      }, 
      callbacks: { 
        before: function (ul, li) { 
          $(li).css('color', 'red'); 
        }, 
        after: function (ul, li) { 
          $(li).css('color', '#e63c3c'); 
        } 
      } 
    }); 

    addVar = 1; 
    $('.add').click(function () { 
      $('.myTicker2 ul').append( 
        '<li>' + addVar + ':' + 'ADDED TEXT ' + 
        'As the placement season is back ' + 
        'GeeksforGeeks is here to help you ' + 
        'crack the interview</li>'); 
      addVar++; 
    }); 

    var ticker = $('.myTicker2') 
      .easyTicker() 
      .data('easyTicker'); 
    $('.up').click(function () { 
      ticker.up(); 
    }); 

    $('.down').click(function () { 
      ticker.down(); 
    }); 
  }); 