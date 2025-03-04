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
)
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

)
document.getElementById("new-mod").addEventListener('submit', (event) => {
    event.preventDefault();
    const a = document.getElementById("r").value;
    const newtons = (g) => {
        let approx = g - (6 * Math.pow(g, 4) - 13 * Math.pow(g, 3) - 18 * Math.pow(g, 2) + 7 * g + 6) / (24 * Math.pow(g, 3) - 39 * Math.pow(g, 2) - 36 * g + 7);
        let r = approx;
        while (r - g != 0) {
            g = r;
            r = g - (6 * Math.pow(g, 4) - 13 * Math.pow(g, 3) - 18 * Math.pow(g, 2) + 7 * g + 6) / (24 * Math.pow(g, 3) - 39 * Math.pow(g, 2) - 36 * g + 7);
            document.getElementById("result3").value = [approx, r];
        }
    }
}
)