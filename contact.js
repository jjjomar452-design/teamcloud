const scriptURL = 'https://script.google.com/macros/s/AKfycbyELorohP7SThP--oIKbQO4NBp6dLJWRHqEgDF0R3ONhmEzAcD5B3m9-JFzhytoTHVH/exec';

const form = document.querySelector('form'); // Thabbet ken el form ma3ndouch id, testa3mel selector
const btn = document.querySelector('button[type="submit"]');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // UI Feedback
    btn.disabled = true;
    btn.style.opacity = "0.5";
    btn.innerHTML = '<span class="loader"></span> Envoi en cours...';

    // Send Data
    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form) 
    })
    .then(response => {
        if(response.ok) {
            // Success Effect
            btn.innerHTML = "Success! ✅";
            btn.style.background = "#00ff88"; // Green Neon
            
            setTimeout(() => {
                btn.disabled = false;
                btn.style.opacity = "1";
                btn.style.background = "linear-gradient(90deg, #00D2FF, #3BB9FF)";
                btn.innerHTML = "Envoyer";
                form.reset();
            }, 3000);
            
            console.log('Success!', response);
        } else {
            throw new Error('Response not OK');
        }
    })
    .catch(error => {
        console.error('Error!', error.message);
        btn.disabled = false;
        btn.style.opacity = "1";
        btn.innerHTML = "Retry ❌";
        btn.style.background = "#ff4b2b"; // Red Neon
    });
});
