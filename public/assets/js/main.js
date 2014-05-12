;(function(){

  // Menu settings
  $('#menuToggle, .menu-close').on('click', function(){
    $('#menuToggle').toggleClass('active');
    $('body').toggleClass('body-push-toleft');
    $('#theMenu').toggleClass('menu-open');
  });

  $(document).on('click', '#submitTimeline', function(){
    var story = {
      icon: $('.icon').val(),
      title: $('.title').val(),
      time: $('.time').val(),
      content: $('.content').val()
    }
    $.ajax({
      url: '/timeline/create',
      type: 'POST',
      data: story,
      dataType: 'JSON',
      success: function(data){
        console.log("success");
        $('.story-form input').each(function(){
          $(this).val('');
        });
      },
      error: function(jqXHR, status, thrownError) {
        var responseText = jQuery.parseJSON(jqXHR.responseText);
        console.log(responseText);
      }
    });
  });

  $(document).on('click', '.deleteStory', function(){
    var storyId = $(this).data('story-id');
    $.ajax({
      url: '/timeline/delete/' + storyId,
      type: 'DELETE',
      success: function(){
        console.log("Deleted");
      },
      error: function(jqXHR, status, thrownError) {
        var responseText = jQuery.parseJSON(jqXHR.responseText);
        console.log(responseText);
      }
    });
  });

  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(39.951076, -83.001306),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  // Draw the map
  var mapObject = new google.maps.Map(document.getElementById("map"), mapOptions);
  
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(39.951076, -83.001306),
    map: mapObject,
    title:"Hello World!"
  });

  marker.setMap(mapObject);

  $('.timeline li:odd').addClass('timeline-inverted');

})(jQuery)

$(window).load(function(){
  // Get timeline via ajax since handlebars is doing some weird shit.
  // $.get('/timeline', function(stories){
  //   $.each(stories, function(k, v){
  //     console.log(v)
  //     $('.timeline').append('<li>' +
  //       '<div class="timeline-badge"><i class="icon-' + v.icon + '"></i></div>' +
  //       '<div class="timeline-panel">' +
  //       '<div class="timeline-heading">' +
  //       '<h4 class="timeline-title">' + v.title +
  //       '<button type="button" class="close deleteStory" data-story-id="' + v.id + '" aria-hidden="true">&times;</button>' +
  //       '</h4>' +
  //       '<p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>' + v.time + '</small></p></div>' +
  //       '<div class="timeline-body">' +
  //       '<p>' + v.content + '</p>' +
  //       '</div></div></div>' +
  //     '</li>')
  //   });
  // });

  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 40
  });
});