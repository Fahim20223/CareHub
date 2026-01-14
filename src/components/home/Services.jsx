// import React from "react";
// // import products from "@/data/toys.json";

// import ServiceCard from "../Cards/ServiceCard";
// import { getProducts } from "@/actions/server/service";

// const Services = async () => {
//   const services = await getProducts();
//   return (
//     <div>
//       <h2 className="text-center text-4xl font-bold mb-10">Our Services</h2>

//       <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
//         {services.map((service) => (
//           <ServiceCard key={service._id} service={service}></ServiceCard>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

import ServiceCard from "../Cards/ServiceCard";
import { getProducts } from "@/actions/server/service";

const Services = async ({ limit }) => {
  const services = await getProducts();

  const visibleServices = limit ? services.slice(0, limit) : services;

  return (
    <div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
        {visibleServices.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
