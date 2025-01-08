export function AppBar() {
  return (
    <div className="shadow-lg h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">
        <h2 className="font-semibold text-2xl">Paytm App</h2>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">Hello</div>
        <div className="rounded-full h-12 w-12 bg-slate-300 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">U</div>
        </div>
      </div>
    </div>
  );
}
