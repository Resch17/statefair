const contentTarget = document.querySelector(".customers");
const eventHub = document.querySelector("#state-fair");

let customerCounter = 0;

export const CustomerCount = () => {
  // using custom events
  const eventArray = [
    "rideTicketPurchased",
    "foodTicketPurchased",
    "gameTicketPurchased",
    "sideshowTicketPurchased",
    "fullPackageTicketPurchased"
  ];

  eventArray.forEach((event) =>
    eventHub.addEventListener(event, () => {
      if (event === "fullPackageTicketPurchased") {
        customerCounter = customerCounter + 4;
      } else {
        customerCounter++;
      }
      contentTarget.innerHTML = `Total tickets purchased: ${customerCounter}`;
    })
  );

  // by counting class names
  // eventHub.addEventListener("click", (clickEvent)=> {
  //   if (clickEvent.target.classList.contains("btn")) {
  //     let count = document.getElementsByClassName("person").length
  //     contentTarget.innerHTML = `Total tickets purchased: ${count}`
  //   }
  // })
};
