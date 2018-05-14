/*
 * Implement all your JavaScript in this file!
 */

var first;
var second;
var clear;
var op;
$(':button').click(function() {
    if (clear) {
        $('#display').val('');
        clear = false;
    }
    if ($(this).attr('id') == 'clearButton') {
        first = 0;
        second = 0;
        op = '';
        $('#display').val('');
        console.log('cleared');
    } else if (isNaN($(this).text())) {
        if (!first) {
            first = Number($('#display').val());
            clear = true;
            op = $(this).text();
            console.log('1')
        } else if (!second) {
            second = Number($('#display').val());
            $('#display').val(eval());
            clear = true;
            console.log('2')
        } else {
            first = eval();
            second = Number($('#display').val());
            op = $(this).text();
        }

    } else {
        $('#display').val($('#display').val() + $(this).val());
    }
});


function eval() {
    switch (op) {
        case '+':
            return first + second;
            break;
        case '-':
            return first - second;
            break;
        case '*':
            return first * second;
            break;
        case String.fromCharCode(247):
            if (second == 0) {
                first = 0;
                second = 0;
                op = '';
                return 'infinity';
            }
            return first / second;
            break;
    }
}
