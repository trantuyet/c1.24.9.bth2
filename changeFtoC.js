//Hàm chuyển đổi nhiệt độ bằng cách lấy độ F từ id của input trừ đi 32 được bao nhiêu chia cho 1.8

    function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}

