
function applyFunctions(i, functions) {
    var results = [];
    for (var j = 0; j < functions.length; j++) {
        results[j] = functions[j](i);
    }
    return results;
}

function mainFunction() {
    var selected = [];
    var i = 0;
    var n = parseInt(document.getElementById("no").value);
    if (isNaN(n)) {
        var html = 'Introduceti o valoare numerica';
        $('#results').html(html);
    } else {
        if (document.getElementById("add_one").checked) {
            selected[i] = add_one;
            i++;
        }
        if (document.getElementById("multiply_by_five").checked) {
            selected[i] = multiply_by_five;
            i++;
        }
        if (document.getElementById("multiply_by_two").checked) {
            selected[i] = multiply_by_two;
            i++;
        }
        if (document.getElementById("substract_five").checked) {
            selected[i] = substract_five;
            i++;
        }
        if (document.getElementById("substract_three").checked) {
            selected[i] = substract_three;
            i++;
        }
        if (document.getElementById("add_two").checked) {
            selected[i] = add_two;
            i++;
        }
        var results = applyFunctions(n, selected);
        var html = '';
        for (var i = 0; i < results.length; i++) {
            html += results[i];
            if (i !== results.length - 1) {
                html += ', ';
            }
        }
        $('#results').html(html);
        $('#response').show();
    }
}

function add_one(n) {
    var m = n + 1;
    return m;
}
function multiply_by_five(n) {
    return n * 5;
}
function multiply_by_two(n) {
    return n * 2;
}
function substract_five(n) {
    return n - 5;
}
function substract_three(n) {
    return n - 3;
}
function add_two(n) {
    return n + 2;
}
