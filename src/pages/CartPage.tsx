export const CartPage = () => {
    return (
        <div className="container">
            <h1 className="text-indigo-700 text-3xl font-bold">
                Cart Page
            </h1>
            <div className="flex flex-col items-center justify-center h-full">
                <p className="text-gray-500">Your cart is empty</p>
                <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg">
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};