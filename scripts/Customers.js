const contentTarget = document.querySelector('.customers');
const eventHub = document.querySelector('#state-fair');

let customerCounter = 0;

export const CustomerCount = () => {
  const eventArray = [
    'rideTicketPurchased',
    'foodTicketPurchased',
    'gameTicketPurchased',
    'sideshowTicketPurchased',
    'fullPackageTicketPurchased',
  ];

  eventArray.forEach((event) =>
    eventHub.addEventListener(event, () => {
      if (event === 'fullPackageTicketPurchased') {
        customerCounter = customerCounter + 4;
      } else {
        customerCounter += 1;
      }
      contentTarget.innerHTML = `Total tickets purchased: ${customerCounter}`;
    })
  );
};
