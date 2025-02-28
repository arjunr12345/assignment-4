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
            document.getElementById("result").value = "No triangle";
        } else if (b == am) {
            document.getElementById("result").value = "Right triangle";
        } else if (b > am) {
            document.getElementById("result").value = "one triangle";
        } else if (am < b && b < c) {
            document.getElementById("result").value = "Two triangles (ambiguous case)";
        }
    } else {
        if (b < c || b == c) {
            document.getElementById("result").value = "No Triangle";
        }
        else if (b > c) {
            document.getElementById("result").value = "one triangle";
        }
    }
    document.getElementById("result").value = "error";

}

)