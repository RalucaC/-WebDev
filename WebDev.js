/*
   Functie care aplica o serie de functii asupra unui numar. Functia intoarce un vector de numere intregi (rezultatele)
   i - parametrul asupra cariua se aplica functiile
   functions - un vector de functii care primesc un numar intreg si intorc tot un numar intreg
 */
function applyFunctions(i, functions) {
    var results = [];
    try{                                               
        if(isNaN(i)){
            throw "Parameter is not a number";
        }
        for (var j = 0; j < functions.length; j++) {
            results[j] = functions[j](i);
        }
    }
        catch (err){
             return [];
        }
    return results;
}
/*
    functie care preia datele introduse in formular si apeleaza functia applyFunctions
    introduce mai apoi in codul html rezultatele
 */
function mainFunction() {
    var selected = [];
    var i = 0;
    var n = parseInt(document.getElementById("no").value, 10);
    var codHtml = '';
    if (isNaN(n)) {
     codHtml = 'Introduceti o valoare numerica!';
     $('#response').hide();
     $('#results').html(codHtml);
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
        for (i = 0; i < results.length; i++) {
            codHtml += results[i];
            if (i !== results.length - 1) {
                codHtml += ', ';
            }
        }
        $('#results').html(codHtml);
        $('#response').show();
     }
}
/*
    serie de functii folosite pentru testare
 */
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
