import TicketPricingHome from "./TicketPricingHome";
import TicketPricingPlan from "./TicketPricingPlan";

export default function TicketPricingIndex() {
  return (
    <>
      <div className="relative font-ibm">
        <TicketPricingHome />
        <TicketPricingPlan />
      </div>
    </>
  );
}
