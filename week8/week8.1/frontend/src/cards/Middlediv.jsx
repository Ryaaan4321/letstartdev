function Middlediv() {
  return (
    <>
      <div className="flex justify-between pt-7 pb-10">
        <div className="pl-4 ">
          <h4 className="text-1xl font-semibold">Overview</h4>
        </div>
        <div className="pr-5">
          <div className="flex justify-between bg-white shadow-lg space-x-1 px-2.5 py-2.5 pl-2.5 pr-2.5 rounded-md border-opacity-100 cursor-pointer">
            <div className="text-gray-500">This month </div>
            <div className="text-gray-500">
               ?l
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Middlediv;
