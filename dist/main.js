$('.openBtn').on('click',function(){
    $('.modal-body').load('content.html',function(){
        $('#myModal').modal({show:true});
    });
});

function switchVisible() {
    if (document.getElementById('FullSidebarColumn')) {

        if (document.getElementById('FullSidebarColumn').style.display == 'none') {
            document.getElementById('FullSidebarColumn').style.display = '';
            document.getElementById('CollapsedSidebarColumn').style.display = 'none';
            $('.home__right').animate({
                marginLeft: '25em'
            },500)
        }
        else {
            $('.home__right').animate({
                marginLeft: '8em'
            },500)
        
            document.getElementById('FullSidebarColumn').style.display = 'none';
            document.getElementById('CollapsedSidebarColumn').style.display = 'block';
        }
    }
}