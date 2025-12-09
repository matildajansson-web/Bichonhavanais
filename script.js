// Väntar tills hela HTML-dokumentet har laddats
document.addEventListener('DOMContentLoaded', function() {
    
    // Hämtar knappen och tipstexten via deras ID:n
    const knapp = document.getElementById('visa-tips-knapp');
    const tipsText = document.getElementById('tränings-tips');

    // Kontrollerar att båda elementen existerar innan vi lägger till eventlyssnaren
    if (knapp && tipsText) {
        
        // Lägger till en 'click' eventlyssnare på knappen
        knapp.addEventListener('click', function() {
            
            // Kontrollerar den aktuella display-stilen
            if (tipsText.style.display === 'none') {
                // Om texten är dold, visa den och ändra knapptext
                tipsText.style.display = 'block';
                knapp.textContent = 'Dölj Träningsmål';
            } else {
                // Om texten är synlig, dölj den och återställ knapptext
                tipsText.style.display = 'none';
                knapp.textContent = 'Klicka för träningsmål!';
            }
        });
    } else {
        console.error("Kunde inte hitta knappen eller tipstexten. Kontrollera ID:n.");
    }

});
