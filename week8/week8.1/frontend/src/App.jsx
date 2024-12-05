function App() {
  return (
    <>
      <div className="flex justify-around">
        <div style={{ color: "royalblue" }}>hmlo hmlo</div>
        <div style={{ color: "saddlebrown" }}>Hmlo hmlo</div>
        <div style={{ color: "red" }}>hmlo</div>
      </div>
      <div className="grid-cols-1 md:grid md:grid-cols-3 ">
        <div
          style={{ color: "royalblue" }}
          className=" md:col-span-1 bg-slate-500"
        >
          hmlo hmlo
        </div>
        <div
          style={{ color: "saddlebrown" }}
          className=" md:col-span-1 bg-zinc-300"
        >
          Hmlo hmlo
        </div>
        <div
          style={{ color: "red" }}
          className=" md:col-span-1 bg-red-950"
        >
          hmlo hmlo
        </div>
      </div>
    </>
  );
}

export default App;
