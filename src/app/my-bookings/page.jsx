import { getBooked } from "@/actions/server/booked";
import BookedItems from "@/components/Cards/BookedItems";
import Bookings from "@/components/home/Bookings";
import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
// import { authOptions } from "@/lib/auth";

const BookedPage = async () => {
  // const session = await getServerSession(authOptions);

  // // 🔐 Not logged in → redirect
  // if (!session) {
  //   redirect("/login?callbackUrl=/my-bookings");
  // }

  // const bookedItems = await getBooked(session.user.email);
  const bookedItems = await getBooked();
  const formattedItems = bookedItems.map((item) => ({
    ...item,
    id: item._id.toString(),
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-9 min-h-screen">
      {/* Header */}
      <div className="py-6">
        <h2 className="text-2xl sm:text-3xl font-bold mt-6">My Bookings</h2>
        <p className="opacity-60 mt-2 mb-9">
          {bookedItems.length} bookings total
        </p>
      </div>

      <Bookings bookedItems={formattedItems} />
    </div>
  );
};

export default BookedPage;
