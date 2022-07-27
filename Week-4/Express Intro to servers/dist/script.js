$("#btn").on('click', function () {
    $('#result').empty()
    const userInput = $("#inputId").val()
    $.get(`/priceCheck/${userInput}`, (data) => {
        $('#result').append(`The price is ${
            data.price
        }`)
    })
})

$('#buyitem').on('click', function () {
    const userInput = $('#buy').val()
    let cost = 0
    $.get(`/priceCheck/${userInput}`, function (data) {
        cost = data.price
        $.get(`/buy/${userInput}`, function (data) {
            $('#result').empty()
            $('#result').append(`Congratulations, you've just bought ${
                data.name
            } for ${
                data.price
            }. There are ${
                data.inventory
            } left now in the store.`)
        })
    })
})
