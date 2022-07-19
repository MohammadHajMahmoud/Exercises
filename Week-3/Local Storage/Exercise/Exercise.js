let wisdom = JSON.parse(localStorage.getItem('wisdom') || '[]')
let idd = localStorage.getItem('idd') || 0;
const appendWis = function (text, id) {
    $('#below').append(`<div class="container" id=${id}>
    <span >${text}</span>
    <span class="delWis"> X</span>
    </div>`)
}
wisdom.forEach(wis => appendWis(wis.text, wis.id))
$('#insert').click(function () {
    let input = $('#input').val();
    idd++;
    localStorage.setItem('idd', idd)
    appendWis(input, idd)
    wisdom.push({text: input, id: idd})
    if (wisdom.length % 2 == 0) {
        localStorage.setItem('wisdom', JSON.stringify(wisdom))
    }
})

$('#clearStorage').on('click', function () {
    localStorage.clear()
    $('#below').empty()
})
$('#below').on('click', '.delWis', function () {
    let wisId = $(this).closest(".container").attr('id')
    let temp = JSON.parse(localStorage.getItem('wisdom') || '[]')
    temp = temp.filter(wis => wis.id != wisId)
    wisdom = temp
    localStorage.setItem('wisdom', JSON.stringify(wisdom))
    $(this).closest(".container").remove();
})
