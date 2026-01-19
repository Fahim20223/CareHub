import { getBooked } from "@/actions/server/booked";
import BookedItems from "@/components/Cards/BookedItems";
import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
// import { authOptions } from "@/lib/auth";

const BookedPage = async () => {
  const session = await getServerSession(authOptions);

  // 🔐 Not logged in → redirect
  if (!session) {
    redirect("/login?callbackUrl=/my-bookings");
  }

  const bookedItems = await getBooked(session.user.email);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-9 min-h-screen">
      {/* Header */}
      <div className="py-6">
        <h2 className="text-2xl sm:text-3xl font-bold mt-6">My Bookings</h2>
        <p className="opacity-60 mt-2 mb-9">
          {bookedItems.length} bookings total
        </p>
      </div>

      {bookedItems.length > 0 ? (
        <div className=" space-y-4">
          {bookedItems.map((item) => (
            <BookedItems key={item._id} item={item} viewType="card" />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center bg-base-100 dark:bg-gray-800 rounded-xl dark:shadow-md text-center">
          <div className="text-6xl mb-4">📋</div>
          <h3 className="text-2xl font-semibold mb-2">No Bookings Found</h3>
          <p className="opacity-60 mb-8">
            You haven’t booked any services yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default BookedPage;
