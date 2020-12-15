lizMap.events.on({
    'uicreated':function(evt){
        // Add button
        var dock_resize_button = '<button id="dock-resize" class="btn btn-success">➡</button>';
        $('#dock').append(dock_resize_button);

        $('#dock-resize').click(function(){
            var dock_is_full_size = $('#dock').hasClass('dock-full-size');
            $('#dock').toggleClass('dock-full-size', !dock_is_full_size);
            if (dock_is_full_size) {
                $('#dock-resize').text('➡');
            } else {
                $('#dock-resize').text('⬅');
            }
        })
    }
});
