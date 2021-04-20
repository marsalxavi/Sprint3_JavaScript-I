function main() {
    n1 = parseInt(document.getElementById("Num1").value);
    n2 = parseInt(document.getElementById("Num2").value);
    oper = document.getElementById("Operador").value;
    calculadora(oper, n1, n2);
}

function calculadora(oper, n1, n2) {


    switch (oper) {
        case "+":
            resultat = suma(n1, n2);
            break;
        case "-":
            resultat = resta(n1, n2);
            break;
        case "*":
            resultat = producte(n1, n2);
            break;
        case "/":
            resultat = divisio(n1, n2);
            break;
        default:
            document.write("<b><u>" + "Operador incorrecte !!!" + "</u></b>");
            break;
    }
    document.write("El resultat es: " + "<br>" + "<b>" + n1 + oper + n2 + "=" + resultat + "</b>" + "<br>");
}

function suma(n1, n2) {
    return (n1 + n2);
}
function resta(n1, n2) {
    return (n1 - n2);
}
function producte(n1, n2) {
    return (n1 * n2);
}
function divisio(n1, n2) {
    if (isZero(n2) == true) {
        // document.write("" + resultat + "</b>" + "<br>");
        return ("Infinit");
    } else {
        return (n1 / n2);
    }
}

function isZero(n) {
    let isZero = false;
    if (n == 0) {
        isZero = true;
    }
    return isZero;
}