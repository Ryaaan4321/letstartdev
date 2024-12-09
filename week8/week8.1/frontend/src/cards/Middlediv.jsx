function Middlediv() {
  return (
    <>
      <div className="flex justify-between pt-7 pb-10">
        <div className="pl-4 ">
          <h4 className="text-1xl font-semibold">Overview</h4>
        </div>
        <div className="pr-5">
          <div className="flex justify-between bg-white shadow-lg space-x-1 px-2.5 py-2.5 pl-2.5 pr-2.5 rounded-md border-opacity-100 cursor-pointer">
            <div className="text-gray-600">This Month </div>
            <div className="text-gray-600">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Middlediv;
