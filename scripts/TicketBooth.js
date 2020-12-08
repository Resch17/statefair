const contentTarget = document.querySelector('.entry');
const eventHub = document.querySelector('#state-fair');

eventHub.addEventListener('click', (clickEvent) => {
  let customEvent;
  if (clickEvent.target.classList.contains('btn')) {
    customEvent = new CustomEvent(`${clickEvent.target.id}Purchased`);
    eventHub.dispatchEvent(customEvent);
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
