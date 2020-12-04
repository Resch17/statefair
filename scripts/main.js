// Import and invoke the ticket booth component function

import { TicketBooth } from "./TicketBooth.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { FoodTicketHolders } from "./food/FoodTicketHolders.js";
import { GameTicketHolders } from "./games/GameTicketHolders.js";
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolders.js";
import { fullPackageTicketHolders } from "./FullPackage.js";
import { CustomerCount } from "./Customers.js"

TicketBooth();
RideTicketHolders();
FoodTicketHolders();
GameTicketHolders();
SideshowTicketHolders();
fullPackageTicketHolders();
CustomerCount();