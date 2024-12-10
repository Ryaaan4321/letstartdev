function TransactionIdOrderId(){
    return (
        <>
        <div className="pt-3 bg-white shadow-md">
            <div className="grid grid-cols-5 bg-gray-300 text-1xl font-medium pt-4 pb-4" id="header">
                <div className="col-span-1">Order</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-1">Transaction Id</div>
                <div className="col-span-1">Refund Date</div>
                <div className="col-span-1">Total Amount</div>
            </div>
        </div>
        </>
    )
}
export default TransactionIdOrderId