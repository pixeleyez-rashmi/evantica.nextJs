import BLogDetailsHome from "./BlogDetailsHome";
import BLogDetailsInfo from "./BlogDetailsInfo";

export default function BLogDetailsIndex() {
  return (
    <>
      <div className="relative font-ibm">
        <BLogDetailsHome />
        <BLogDetailsInfo />
      </div>
    </>
  );
}
