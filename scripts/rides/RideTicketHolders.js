const contentTarget = document.querySelector('.rides');
const eventHub = document.querySelector('#state-fair');

export const RideTicketHolders = () => {
  eventHub.addEventListener('rideTicketPurchased', () => {
    contentTarget.innerHTML += `
    <div class="person rider"></div>
    `;
  });
};
