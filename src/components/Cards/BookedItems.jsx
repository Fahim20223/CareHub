"use client";
import React from "react";
import { Trash2, Plus, Minus, Eye, Edit } from "lucide-react";
import Swal from "sweetalert2";
import { deleteItemsFromBookedList } from "@/actions/server/booked";
import { toast } from "react-toastify";

const BookedItems = ({
  item,
  // viewType = "table",
  removeItem,
  updateQuantity,
}) => {
  const { name, image, quantity, pricePerHour, _id, username } = item;

  // // ----------------- TABLE ROW (DESKTOP) -----------------
  // if (viewType === "table") {
  //   return (
  //     <tr className="border-b hover:bg-base-200 dark:hover:bg-gray-700 transition-colors">
  //       <td className="p-4">
  //         <div className="flex items-center gap-4">
  //           <img
  //             src={image}
  //             alt={name}
  //             className="w-16 h-16 object-cover rounded-lg"
  //           />
  //           <div>
  //             <h3 className="font-semibold">{name}</h3>
  //             <p className="text-sm opacity-60">{username}</p>
  //           </div>
  //         </div>
  //       </td>

  //       <td className="p-4">{username}</td>

  //       <td className="p-4 font-bold text-primary">${pricePerHour}</td>

  //       <td className="p-4">
  //         <div className="flex justify-center items-center gap-2">
  //           <button
  //             onClick={() => updateQuantity?.(_id, -1)}
  //             className="btn btn-circle btn-sm btn-ghost"
  //           >
  //             <Minus className="w-4 h-4" />
  //           </button>
  //           <span className="w-8 text-center font-bold">{quantity}</span>
  //           <button
  //             onClick={() => updateQuantity?.(_id, 1)}
  //             className="btn btn-circle btn-sm btn-ghost"
  //           >
  //             <Plus className="w-4 h-4" />
  //           </button>
  //         </div>
  //       </td>

  //       <td className="p-4">
  //         <div className="flex justify-center gap-2">
  //           <button className="btn btn-circle btn-sm btn-ghost btn-info">
  //             <Edit className="w-4 h-4" />
  //           </button>
  //           <button className="btn btn-circle btn-sm btn-ghost">
  //             <Eye className="w-4 h-4" />
  //           </button>
  //           <button
  //             onClick={() => removeItem?.(_id)}
  //             className="btn btn-circle btn-sm btn-ghost btn-error"
  //           >
  //             <Trash2 className="w-4 h-4" />
  //           </button>
  //         </div>
  //       </td>
  //     </tr>
  //   );
  // }

  // ----------------- CARD (MOBILE) -----------------
  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteItemsFromBookedList(_id);
        if (result.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Opps!",
            text: "Something went wrong",
            icon: "error",
          });
        }
      }
    });
  };

  const handleEdit = () => {
    toast("This feature will work soon");
  };

  const handleEye = () => {
    toast("This feature will work soon");
  };

  return (
    <div className="bg-base-100 dark:bg-gray-800 border rounded-lg p-4 mb-4 shadow-sm">
      <div className="flex gap-4">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h3 className="font-semibold truncate">{name}</h3>
          <p className="text-sm opacity-60">{username}</p>
          <p className="font-bold text-primary mt-1">${pricePerHour}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 pt-3 border-t">
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateQuantity?.(_id, -1)}
            className="btn btn-circle btn-xs btn-ghost"
          >
            <Minus className="w-5 h-5" />
          </button>
          <span className="font-bold">{quantity}</span>
          <button
            onClick={() => updateQuantity?.(_id, 1)}
            className="btn btn-circle btn-xs btn-ghost"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-1">
          <button
            onClick={handleEdit}
            className="btn btn-circle btn-xs btn-ghost btn-info"
          >
            <Edit className="w-5 h-5" />
          </button>
          <button
            onClick={handleEye}
            className="btn btn-circle btn-xs btn-ghost"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-circle btn-xs btn-ghost btn-error"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// return null; // fallback
// };

export default BookedItems;
