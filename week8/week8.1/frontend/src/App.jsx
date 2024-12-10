import RevenueCard from "./cards/RevenueCard";
import Navigation from "./cards/Naivigation";
import Middlediv from "./cards/Middlediv";
import Transaction from "./cards/Transaction";
import TransactionIdOrderId from "./cards/TransactionIdOrderId";
function App() {
  return (
    <>
      <Navigation />
      <Middlediv/>
      <div className="grid grid-cols-3 ">
        <RevenueCard  title="Amount Pending" amount={130000} order={13} />
        <RevenueCard title="Amount Pending" amount={130000} order={13} />
        <RevenueCard title="Amount Pending" amount={130000} order={13} />
      </div>
      <Transaction/>
      <TransactionIdOrderId/>
    </>
  );
}

export default App;
