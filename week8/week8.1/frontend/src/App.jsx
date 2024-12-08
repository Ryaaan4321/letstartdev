import RevenueCard from "./cards/RevenueCard";
function App() {
  return (
    <>
    <div className="grid grid-cols-3">
    <RevenueCard title="Amount Pending" amount={130000} order={13}/>
    <RevenueCard title="Amount Pending" amount={130000} order={13}/>
    <RevenueCard title="Amount Pending" amount={130000} order={13}/>
    </div>
     
    </>
  );
}

export default App;
