document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    
    button.addEventListener('click', function() {
        alert('🎉 مبروك! موقعك شغال بنجاح!');
        
        // تأثير بسيط لتغيير لون الخلفية
        document.body.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
    });
});