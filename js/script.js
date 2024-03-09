document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var age = parseInt(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;

    // Konversi tinggi dari cm menjadi m
    var heightInMeter = height / 100;

    // Hitung BMI
    var bmi = weight / (heightInMeter * heightInMeter);

    // Lakukan penanganan BMI sesuai dengan kriteria yang diberikan
    var bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = "Terlalu Kurus";
    } else if (bmi >= 18.5 && bmi <= 29.9) {
        bmiCategory = "Normal";
    } else {
        bmiCategory = "Obesitas";
    }

    // Tampilkan hasil BMI
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "<strong>Hasil:</strong> " + bmiCategory;
});
