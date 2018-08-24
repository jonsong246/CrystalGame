let total = 0
let goal = Math.floor(Math.random() * 80) + 20
$('.total').text(total)
$('.goal').text(goal)

for (let i = 1; i < 4; i++) {
    $('.crystalRow').append(`<div class="col-md-4"><img class="crystal" id="crystal${i}" data-crystal=${Math.floor(Math.random() * 20) + 1} src="assets/images/crystal${i}.png" alt="crystal${i}"></div>`)
}


$(document).on('click', ".crystal", function(){
    let crystalValue = $(this).attr('data-crystal')
    console.log(crystalValue);
    total += parseInt(crystalValue)
    $('.total').text(total)
    gameStatus();
})

function gameStatus(){
    if (goal === total) {
        $('#message').text('Congratulations! You Win!')   
        setTimeout(function() {
            $('#message').text('Click on a Crystal to try and reach the total')
            reset()
        }, 1000)
    } else if (total > goal) {
        $('#message').text('You lost!')
        setTimeout(function () {
            $('#message').text('Click on a Crystal to try and reach the total')
            reset()
        }, 1000)
    }
}

function reset() {
    $('#crystal1').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
    $('#crystal2').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
    $('#crystal2').attr('data-crystal', Math.floor(Math.random() * 20) + 1)
    total = 0
    $('.total').text(total)
    goal = Math.floor(Math.random() * 80) + 20
    $('.goal').text(goal)
}