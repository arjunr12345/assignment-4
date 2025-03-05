document.getElementById("quad-form").addEventListener('submit', (event) => {
    event.preventDefault();
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        document.getElementById("result").value = "No Roots";
    } else if (discriminant > 0) {
        const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
        const rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("result").value = `x1=${rootOne}, x2=${rootTwo}`;
    } else {
        const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("result").value = `x=${rootOne}`;
    }
}
);
document.getElementById("ambiguous").addEventListener('submit', (event) => {
    event.preventDefault();
    const a = document.getElementById("Aa").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const am = c * Math.sin(a * Math.PI / 180);
    if (a <= 90) {
        if (b < am) {
            document.getElementById("result-2").value = "No triangle";
        } else if (b == am) {
            document.getElementById("result-2").value = "Right triangle";
        } else if (b > am) {
            document.getElementById("result-2").value = "one triangle";
        } else if (am < b && b < c) {
            document.getElementById("result-2").value = "Two triangles (ambiguous case)";
        }
    } else {
        if (b < c || b == c) {
            document.getElementById("result-2").value = "No Triangle";
        }
        else if (b > c) {
            document.getElementById("result-2").value = "one triangle";
        }
    }
    //document.getElementById("result-2").value = "error";

}

);
document.getElementById("new-mod").addEventListener("submit", (event) => {
    event.preventDefault();

    let x = parseFloat(document.getElementById("r").value);
    let tolerance = 1e-6;
    let maxIterations = 100;
    let iteration = 0;

    function f(x) {
        return 6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6;
    }

    function fPrime(x) {
        return 24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7;
    }

    console.log(`Starting Newton’s Method at x = ${x}`);

    while (iteration < maxIterations) {
        let fx = f(x);
        let fpx = fPrime(x);

        if (Math.abs(fpx) < tolerance) {
            document.getElementById("result3").value = "Derivative near zero! No valid root.";
            return;
        }

        let nextX = x - fx / fpx;

        console.log(`Iteration ${iteration}: x = ${nextX}`);

        if (Math.abs(nextX - x) < tolerance) {
            document.getElementById("result3").value = `Root: ${nextX.toFixed(6)}`;
            return;
        }

        x = nextX;
        iteration++;
    }

    document.getElementById("result3").value = "Did not converge.";
});
document.getElementById("poly").addEventListener("submit", (event) => {
    event.preventDefault();

}
)
document.getElementById("poly").addEventListener("submit", (event) => {
    event.preventDefault();

    const coefficients = document.getElementById("ce").value.split(" ").map(Number);
    const exponents = document.getElementById("ex").value.split(" ").map(Number);
    const x = parseFloat(document.getElementById("x").value);

    if (coefficients.length !== exponents.length) {
        document.getElementById("result4").value = "Error: Mismatched coefficients and exponents";
        return;
    }

    let polynomialString = "";
    let polynomialValue = 0;

    for (let i = 0; i < coefficients.length; i++) {
        let coef = coefficients[i];
        let exp = exponents[i];

        if (i > 0 && coef >= 0) polynomialString += " + ";
        polynomialString += `${coef}x^${exp}`;

        polynomialValue += coef * Math.pow(x, exp);
    }

    document.getElementById("result4").value = polynomialString;
    document.getElementById("result5").value = polynomialValue.toFixed(4); // Rounded to 4 decimal places
});
document.getElementById("heron").addEventListener("submit", (event) => {
    event.preventDefault();
    
    const a = document.getElementById("av").value;
    const b = document.getElementById("bv").value;
    const c = document.getElementById("cv").value;
    const area = (1 / 4) * Math.sqrt(((4 * Math.pow(a, 2)) * Math.pow(b, 2)) - Math.pow((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)), 2));

    document.getElementById("result6").value = area;
});
