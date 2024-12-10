function TransactionIdOrderId() {
  return (
    <>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-900 ">
          <thead class="text-xs text-gray-900 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" class="px-6 py-3">
                OrderId
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Transaction Id
              </th>
              <th scope="col" class="px-6 py-3">
                Refund Date
              </th>
              <th scope="col" class="px-6 py-3">
                Total Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b ">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                13245632
              </th>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <span className="rounded-full bg-red-900 h-2 w-2"></span>
                  <span class="ml-2">Rejected</span>
                </div>
              </td>
              <td class="px-6 py-4 text-gray-800 font-semibold">12345371</td>
              <td class="px-6 py-4">Today 08:45</td>
              <td class='px-6 py-4'>$1234</td>
            </tr>
            <tr class="bg-white border-b ">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                14567272
              </th>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <span className="rounded-full bg-green-900 h-2 w-2"></span>
                  <span class="ml-2">Accepted</span>
                </div>
              </td>
              <td class="px-6 py-4 text-gray-800 font-semibold">16546464</td>
              <td class="px-6 py-4">Today 08:45</td>
              <td class='px-6 py-4'>$1234</td>
            </tr>
            <tr class="bg-white border-b ">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                14567272
              </th>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <span className="rounded-full bg-green-900 h-2 w-2"></span>
                  <span class="ml-2">Accepeted</span>
                </div>
              </td>
              <td class="px-6 py-4 text-gray-800 font-semibold">89564746</td>
              <td class="px-6 py-4">Today 08:45</td>
              <td class='px-6 py-4'>$1234</td>
            </tr>
            <tr class="bg-white border-b ">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                14567272
              </th>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <span className="rounded-full bg-red-900 h-2 w-2">
                    
                  </span>
                  <span class="ml-2">Rejected</span>
                </div>
              </td>
              <td class="px-6 py-4 text-gray-800 font-semibold">90874521</td>
              <td class="px-6 py-4">Today 08:45</td>
              <td class='px-6 py-4'>$1234</td>
            </tr>
            <tr class="bg-white border-b ">
              <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                14567272
              </th>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <span className="rounded-full bg-red-900  h-2 w-2"></span>
                  <span class="ml-2">Rejected</span>
                </div>
              </td>
              <td class="px-6 py-4 text-gray-800 font-semibold">76453212</td>
              <td class="px-6 py-4">Today 08:45</td>
              <td class='px-6 py-4'>$1234</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default TransactionIdOrderId;
