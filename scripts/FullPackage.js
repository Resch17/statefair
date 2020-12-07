const rideTarget = document.querySelector('.rides');
const foodTarget = document.querySelector('.food');
const gameTarget = document.querySelector('.games');
const sideshowTarget = document.querySelector('.sideshow');
const eventHub = document.querySelector('#state-fair');

export const fullPackageTicketHolders = () => {
  eventHub.addEventListener('fullPackageTicketPurchased', () => {
    const bigSpender = `<div class="person bigSpender"></div>`;
    const columns = [rideTarget, foodTarget, gameTarget, sideshowTarget];
    columns.forEach((column) => (column.innerHTML += bigSpender));
  });
};
