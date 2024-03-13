const cardNumbers = [];
  const cards = document.querySelector('.cards');
  const addCard = document.querySelector('.add-card');
  const sortCard = document.querySelector('.sort-card');

  addCard.addEventListener('click', function(){
    let cardId = new Date().getUTCMilliseconds();
    cardNumbers.push(cardId);
    renderCards(cardNumbers);
  });

sortCard.addEventListener('click', function(){
    cardNumbers.sort((a, b) => a - b);
    renderCards(cardNumbers);
});

  function renderCards(cardNumbers) {
    cards.innerHTML = '';
    for(let cardNumber of cardNumbers) {
      const card = document.createElement('div');
      card.className = 'card-item';

      const cardContent = document.createElement('span');
      cardContent.textContent = cardNumber;

      const closeButton = document.createElement('span');
      closeButton.className = 'close-button';
      closeButton.innerHTML = '&#10006;';
      closeButton.addEventListener('click', function() {
        card.remove();
        const index = cardNumbers.indexOf(cardNumber);
        if (index !== -1) {
          cardNumbers.splice(index, 1);
        }
      });

      card.appendChild(cardContent);
      card.appendChild(closeButton);
      cards.appendChild(card);
    }
  }