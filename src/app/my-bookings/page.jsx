import { getBooked } from "@/actions/server/booked";
import BookedItems from "@/components/Cards/BookedItems";

const BookedPage = async () => {
  const bookedItems = await getBooked();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-9 min-h-screen">
      {/* Header */}
      <div className="py-6">
        <h2 className="text-2xl sm:text-3xl font-bold">
          All the books added by the User
        </h2>
        <p className="opacity-60 mt-2">{bookedItems.length} books total</p>
      </div>

      {bookedItems.length > 0 ? (
        <>
          {/* DESKTOP TABLE */}
          {/* <div className="hidden md:block bg-base-100 dark:bg-gray-800 rounded-lg shadow-md overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead className="bg-base-200 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase">
                    Product
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase">
                    Author
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase">
                    Price
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase">
                    Quantity
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookedItems.map((item) => (
                  <BookedItems key={item._id} item={item} viewType="table" />
                ))}
              </tbody>
            </table>
          </div> */}

          {/* MOBILE CARDS */}
          <div className="md:hidden">
            {bookedItems.map((item) => (
              <BookedItems key={item._id} item={item} viewType="card" />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-12 bg-base-100 dark:bg-gray-800 rounded-lg dark:shadow-md text-3xl">
          <p className="opacity-60">There is no booked list by the user</p>
        </div>
      )}
    </div>
  );
};

export default BookedPage;
