document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var age = parseInt(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;

    var heightInMeter = height / 100;

    var bmi;
    var bmiCategory;
    var advice;
    var penyakit;
    var infoUsia;
    

    if (age >= 18) {
        bmi = weight / (heightInMeter * heightInMeter);
    } else {
        var bmiForAge;
        if (gender === 'male') {
            bmiForAge = 17.55 + (weight * 0.416) - (height * 0.0573) - 34.9;
        } else {
            bmiForAge = 25.74 + (weight * 0.349) - (height * 0.0569) - 31.2;
        }
        // Menyesuaikan BMI berdasarkan usia
        if (age < 2) {
            bmi = bmiForAge;
        } else if (age < 5) {
            bmi = bmiForAge - 0.5;
        } else if (age < 12) {
            bmi = bmiForAge - 0.25;
        } else {
            bmi = bmiForAge;
        }
    }

    if (age >= 18) {
        // Kategori BMI dan saran untuk dewasa
        if (gender === 'male') {
            if (bmi < 18.5) {
                bmiCategory = "Kurang berat badan";
                advice = "Anda mungkin perlu menambah berat badan untuk meningkatkan kesehatan secara keseluruhan. Konsultasikan dengan profesional kesehatan atau ahli gizi untuk saran yang dipersonalisasi.";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                bmiCategory = "Berat badan normal";
                advice = "Selamat! Berat badan Anda berada dalam rentang sehat. Pertahankan pola makan seimbang dan olahraga teratur untuk tetap sehat.";
            } else if (bmi >= 25.0 && bmi <= 29.9) {
                bmiCategory = "Kelebihan berat badan";
                advice = "Anda mungkin perlu menurunkan berat badan untuk mengurangi risiko mengembangkan masalah kesehatan. Pertimbangkan untuk mengadopsi gaya hidup yang lebih sehat dengan pola makan seimbang dan olahraga teratur.";
                penyakit = "Obesitas dapat meningkatkan risiko penyakit jantung, diabetes tipe 2, tekanan darah tinggi, dan beberapa jenis kanker.";
            } else {
                bmiCategory = "Obesitas";
                advice = "Berat badan Anda mungkin menempatkan Anda pada risiko berbagai masalah kesehatan. Penting untuk mengambil langkah-langkah untuk menurunkan berat badan dan meningkatkan kesehatan Anda. Pertimbangkan untuk mencari dukungan dari profesional kesehatan atau bergabung dengan program penurunan berat badan.";
                penyakit = "Obesitas meningkatkan risiko penyakit jantung, diabetes tipe 2, tekanan darah tinggi, dan beberapa jenis kanker.";
            }
        } else { // Anggap jenis kelamin adalah 'female'
            if (bmi < 18.5) {
                bmiCategory = "Kurang berat badan";
                advice = "Anda mungkin perlu menambah berat badan untuk meningkatkan kesehatan secara keseluruhan. Konsultasikan dengan profesional kesehatan atau ahli gizi untuk saran yang dipersonalisasi.";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                bmiCategory = "Berat badan normal";
                advice = "Selamat! Berat badan Anda berada dalam rentang sehat. Pertahankan pola makan seimbang dan olahraga teratur untuk tetap sehat.";
            } else if (bmi >= 25.0 && bmi <= 29.9) {
                bmiCategory = "Kelebihan berat badan";
                advice = "Anda mungkin perlu menurunkan berat badan untuk mengurangi risiko mengembangkan masalah kesehatan. Pertimbangkan untuk mengadopsi gaya hidup yang lebih sehat dengan pola makan seimbang dan olahraga teratur.";
                penyakit = "Obesitas dapat meningkatkan risiko penyakit jantung, diabetes tipe 2, tekanan darah tinggi, dan beberapa jenis kanker.";
            } else {
                bmiCategory = "Obesitas";
                advice = "Berat badan Anda mungkin menempatkan Anda pada risiko berbagai masalah kesehatan. Penting untuk mengambil langkah-langkah untuk menurunkan berat badan dan meningkatkan kesehatan Anda. Pertimbangkan untuk mencari dukungan dari profesional kesehatan atau bergabung dengan program penurunan berat badan.";
                penyakit = "Obesitas meningkatkan risiko penyakit jantung, diabetes tipe 2, tekanan darah tinggi, dan beberapa jenis kanker.";
            }
        }
    } else {
        // Kategori BMI dan saran untuk anak-anak
        if (bmi < 5) {
            bmiCategory = "Kurang berat badan";
            advice = "Konsultasikan dengan profesional kesehatan untuk panduan tentang berat badan dan pertumbuhan anak Anda. Mereka mungkin merekomendasikan perubahan pola makan atau evaluasi lebih lanjut.";
            penyakit = "Anak-anak dengan berat badan kurang dapat mengalami pertumbuhan dan perkembangan yang tertunda, sistem kekebalan tubuh yang melemah, dan kekurangan nutrisi.";
        } else if (bmi >= 5 && bmi < 85) {
            bmiCategory = "Berat badan sehat";
            advice = "Berat badan anak Anda berada dalam rentang yang sehat. Dorong pola makan seimbang dan aktivitas fisik teratur untuk kesehatan secara keseluruhan.";
        } else if (bmi >= 85 && bmi < 95) {
            bmiCategory = "Kelebihan berat badan";
            advice = "Anak Anda memiliki kelebihan berat badan. Konsultasikan dengan profesional kesehatan untuk panduan tentang perubahan pola makan dan aktivitas fisik untuk mempromosikan berat badan yang sehat.";
            penyakit = "Obesitas pada anak-anak dapat meningkatkan risiko mengembangkan masalah kesehatan di masa mendatang, seperti diabetes tipe 2, tekanan darah tinggi, dan penyakit jantung.";
        } else {
            bmiCategory = "Obesitas";
            advice = "Anak Anda mengalami obesitas. Penting untuk mengambil tindakan untuk menangani berat badannya dan mempromosikan gaya hidup sehat. Konsultasikan dengan profesional kesehatan untuk panduan dan dukungan yang dipersonalisasi.";
            penyakit = "Obesitas pada anak-anak meningkatkan risiko mengembangkan masalah kesehatan seperti diabetes tipe 2, tekanan darah tinggi, dan penyakit jantung.";
        }
    }

    if (age < 18) {
        infoUsia = "Usia: " + age + " tahun";
    } else {
        infoUsia = "Usia: " + age + " tahun";
    }

    var idealWeightMin = (gender === 'male') ? 20.7 * heightInMeter * heightInMeter : 19.1 * heightInMeter * heightInMeter;
    var idealWeightMax = (gender === 'male') ? 26.4 * heightInMeter * heightInMeter : 25.8 * heightInMeter * heightInMeter;

    var perbandinganBerat;
    if (weight < idealWeightMin) {
        perbandinganBerat = "di bawah";
    } else if (weight > idealWeightMax) {
        perbandinganBerat = "di atas";
    } else {
        perbandinganBerat = "optimal";
    }

    var elemenHasil = document.getElementById('result');
    elemenHasil.innerHTML = "<strong>BMI:</strong> " + bmi.toFixed(1) + "<br>" +
                                "<strong>Hasil:</strong> " + bmiCategory + "<br>" +
                                "<strong>Berat badan:</strong> " + perbandinganBerat + " ideal" + "<br>" +
                                "<strong>Saran:</strong> " + advice + "<br>" +
                                "<strong>Keadaan:</strong> " + (penyakit ? penyakit : "Anda Sehat!") + "<br>" +
                                "<strong>" + infoUsia + "</strong>";
    
    elemenHasil.classList.add("result");
});
document.getElementById('darkModeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});