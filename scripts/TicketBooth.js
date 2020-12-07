const contentTarget = document.querySelector('.entry');
const eventHub = document.querySelector('#state-fair');

eventHub.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.id === 'rideTicket') {
    const rideEvent = new CustomEvent('rideTicketPurchased');
    eventHub.dispatchEvent(rideEvent);
  } else if (clickEvent.target.id === 'foodTicket') {
    const foodEvent = new CustomEvent('foodTicketPurchased');
    eventHub.dispatchEvent(foodEvent);
  } else if (clickEvent.target.id === 'gameTicket') {
    const gameEvent = new CustomEvent('gameTicketPurchased');
    eventHub.dispatchEvent(gameEvent);
  } else if (clickEvent.target.id === 'sideshowTicket') {
    const sideshowEvent = new CustomEvent('sideshowTicketPurchased');
    eventHub.dispatchEvent(sideshowEvent);
  } else if (clickEvent.target.id === 'fullPackageTicket') {
    const fullPackageEvent = new CustomEvent('fullPackageTicketPurchased');
    eventHub.dispatchEvent(fullPackageEvent);
  }
});

export const TicketBooth = () => {
  contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button class="btn" id="rideTicket">Ride Ticket</button>
            <button class="btn" id="foodTicket">Food Ticket</button>
            <button class="btn" id="gameTicket">Game Ticket</button>
            <button class="btn" id="sideshowTicket">Sideshow Ticket</button>
            <button class="btn" id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `;
};
