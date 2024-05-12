document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var textElements = document.querySelectorAll('.text2');
        textElements.forEach(function(textElement) {
            textElement.classList.remove('hidden'); // Yazıyı görünür yap
            textElement.classList.add('typing-animation'); // Animasyon class'ını ekle
        });

        // Ortalama işlemi için tüm .container_yazilar'ı seçip ortalamayı sağlayın
        var containers = document.querySelectorAll('.container_yazilar');
        containers.forEach(function(container) {
            container.style.textAlign = 'center'; // Tüm containerları ortala
        });
    }, 2500); // 3000 milisaniye (3 saniye) gecikme süresi
});


function handlePhoneClick(phoneNumber) {
    window.location.href = 'tel:' + phoneNumber;
}

function handleEmailClick(emailAddress) {
    window.location.href = 'mailto:' + emailAddress;
}





