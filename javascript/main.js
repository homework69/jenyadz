$('.ask').on('click',function (e){
    e.preventDefault();
    $('.ask').not($(this)).removeClass('active')
    $('.answer').not($(this).next()).slideUp(500)
    $(this).toggleClass('active').next().stop().slideToggle(500)
    
})

$('button[data-filter]').click(function () {
    
    let attr = $(this).attr('data-filter');
    if(attr === 'all'){
        $('div[data-filter').stop().slideDown(500)
    }else{
        $('div[data-filter]').stop().slideUp(500)
    }
    
    $(`div[data-filter=${attr}]`).stop().slideDown(500)
})

function writing(element) {
    let inner = element.html(),
    fullText = '',
    letterCount = 0,
    interval = setInterval(() => {
        fullText += inner[letterCount]
        element.html(fullText)
        letterCount++;
        if (fullText === inner) {
            clearInterval(interval)
        }
    }, 200);
}
writing($('h1'))



$('.read-more').click(function(){
    $('.text-hidden').toggleClass('hidden')
    let read = document.querySelector('.read-more')
    if (read.innerHTML == 'Hidden') {
        read.innerHTML = 'Read More'
    }else{
        read.innerHTML = 'Hidden'
    }
})