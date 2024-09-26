import { Link } from "react-router-dom";
import FilterPage from "./FilterPage";
import { Input } from "./ui/input";
import {  useState } from "react";
import { Button } from "./ui/button";
import { Globe, MapPin} from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
// import { Skeleton } from "./ui/skeleton";
// import { useRestaurantStore } from "@/store/useRestaurantStore";
// import { Restaurant } from "@/types/restaurantType";

const SearchPage = () => {
//   const params = useParams();
  const [searchQuery, setSearchQuery] = useState<string>("");
//   const {
//     loading,
//     searchedRestaurant,
//     searchRestaurant,
//     setAppliedFilter,
//     appliedFilter,
//   } = useRestaurantStore();

//   useEffect(() => {
//     searchRestaurant(params.text!, searchQuery, appliedFilter);
//   }, [params.text!, appliedFilter]);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <FilterPage />
        <div className="flex-1">
          {/* Search Input Field  */}
          <div className="flex items-center gap-2">
            <Input
              type="text"
              value={searchQuery}
              placeholder="Search by restaurant & cuisines"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
            //   onClick={() =>
            //     searchRestaurant(params.text!, searchQuery, appliedFilter)
            //   }
              className="bg-orange hover:bg-hoverOrange"
            >
              Search
            </Button>
          </div>
          {/* Searched Items display here  */}
          <div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2 my-3">
              <h1 className="font-medium text-lg">
                {/* ({searchedRestaurant?.data.length})  */}
                Search result found
              </h1>
              <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
               
              </div>
            </div>
            {/* Restaurant Cards  */}
            <div className="grid md:grid-cols-3 gap-4">
              
                  <Card
                    // key={restaurant._id}
                    className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="relative">
                      <AspectRatio ratio={16 / 6}>
                        <img
                        //   src={restaurant.imageUrl}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                      <div className="absolute top-2 left-2 bg-white dark:bg-gray-700 bg-opacity-75 rounded-lg px-3 py-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Featured
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {/* {restaurant.restaurantName} */}
                      </h1>
                      <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin size={16} />
                        <p className="text-sm">
                          City:{" "}
                          <span className="font-medium">
                            {/* {restaurant.city} */}
                            </span>
                        </p>
                      </div>
                      <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
                        <Globe size={16} />
                        <p className="text-sm">
                          Country:{" "}
                          <span className="font-medium">
                            {/* {restaurant.country} */}
                          </span>
                        </p>
                      </div>
                      <div className="flex gap-2 mt-4 flex-wrap">
                       
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 border-t dark:border-t-gray-700 border-t-gray-100 text-white flex justify-end">
                      <Link to={""}>
                        <Button className="bg-orange hover:bg-hoverOrange font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-200">
                          View Menus
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
