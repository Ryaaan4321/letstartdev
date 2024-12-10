function Transaction() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="col-span-2 pt-6 ">
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
        <div className="col-span-2 pt-6 ">
          <div className="flex justify-between">
            <div>
              <form class="max-w-md mx-auto">
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div class="relative">
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg !bg-white focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Transaction Id"
                    required
                  />
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex justify-between space-x-3">
              <div className="flex space-x-2 p-4 bg-gray-300 rounded-md shadow-sm">
                <div className="text-gray-600 flex-1 mx-1">Sort</div>
                <div className="flex-1 mx-2 ">
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
