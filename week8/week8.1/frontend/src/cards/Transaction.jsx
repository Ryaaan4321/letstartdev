function Transaction() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="col-span-2 pt-6">
          <div className="flex  space-x-1 text-1xl font-semibold">
            <h4>Transaction |</h4>
            <h4>This Month</h4>
          </div>
        </div>
        <div className=" col-span-2  flex space-x-3 pt-5">
          <button className="bg-gray-300 p-3 rounded-full px-6 text-gray-600 font-semibold">
            Payout(22)
          </button>
          <button className="bg-blue-700 p-3 rounded-full px-6 text-white font-semibold">
            Refends(6)
          </button>
        </div>
        <div className="col-span-2 pt-6">
          <div className="flex justify-between">
            <div>
              <input type="text" placeholder="Order Id or Transaction Id" />
            </div>
            <div>
              <div className="flex space-x-6 p-2 bg-gray-300 rounded-md shadow-sm">
                <div className="text-gray-600">Sort</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-2 bg-gray-300 rounded-md shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Transaction;
