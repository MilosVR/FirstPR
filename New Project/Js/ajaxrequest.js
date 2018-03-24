$('.users').on('click', function() {


    var korisnik = $('.users')
    
     


    $.ajax({ 
    type: 'GET', 
    url: 'http://mysafeinfo.com/api/data?list=dinosaurs&format=json', 
    dataType: 'json', 
    success: function (data) { 
     for (var i=0;i<korisnik.length;i++)
     {
     $('.users div').append('<p class="name">'+ data[i].nm +'</p>');
     }
    }
});

});
