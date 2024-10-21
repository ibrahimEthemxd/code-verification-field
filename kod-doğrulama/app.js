const codes = document.querySelectorAll(".cod");
const count = document.querySelector(".time");
// İlk öğeye odakla
codes[0].focus();

codes.forEach((code, index) => {
    code.addEventListener("keydown", (e) => {
        // İf tuş 0 ile 9 arasında ise
        if (e.key >= 0 && e.key <= 9) {
            // Şu anki kod öğesinin değerini sıfırla
            codes[index].value = "";

            // Bir sonraki kod öğesine 10ms sonra odaklan
            setTimeout(() => codes[index + 1].focus(), 10);
        }
        // else if Silme işlemi yapılırsa
        else if (e.key == "Backspace") {
            setTimeout(() => codes[index - 1].focus(), 10);
        }
    })
})
document.addEventListener("DOMContentLoaded", () => {

    let time = 60;

    const countDown = () => {
        if (time >= 0) {
            count.innerHTML = time + "s";
        }
        else {
            count.innerHTML = "Süreniz doldu! <br/> Tekrar kod isteyiniz";
        }
        time--;
    }

    setInterval(countDown, 1000);
})

