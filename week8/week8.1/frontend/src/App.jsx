import RevenueCard from "./cards/RevenueCard";
import Navigation from "./cards/Naivigation";
import Middlediv from "./cards/Middlediv";
function App() {
  return (
    <>
      <Navigation />
      <Middlediv/>
      <div className="grid grid-cols-3">
        <RevenueCard  title="Amount Pending" amount={130000} order={13} />
        <RevenueCard title="Amount Pending" amount={130000} order={13} />
        <RevenueCard title="Amount Pending" amount={130000} order={13} />
      </div>
    </>
  );
}

export default App;
