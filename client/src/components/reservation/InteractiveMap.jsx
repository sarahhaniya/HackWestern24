import { Card } from "@/components/ui/card";
import { MapPin, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ParkingSpot {
  id: string;
  number: string;
  isReserved: boolean;
  isSelected: boolean;
  type?: "ev" | "accessible" | "carpool" | "standard";
}

interface InteractiveMapProps {
  selectedSpot?: string;
  parkingSpots?: ParkingSpot[];
  onSpotClick?: (spotId: string) => void;
}

const InteractiveMap = ({
  selectedSpot = "A-123",
  parkingSpots = [
    {
      id: "A-123",
      number: "A-123",
      isReserved: true,
      isSelected: true,
      type: "ev",
    },
    {
      id: "A-124",
      number: "A-124",
      isReserved: false,
      isSelected: false,
      type: "standard",
    },
    {
      id: "A-125",
      number: "A-125",
      isReserved: false,
      isSelected: false,
      type: "accessible",
    },
    {
      id: "A-126",
      number: "A-126",
      isReserved: true,
      isSelected: false,
      type: "carpool",
    },
  ],
  onSpotClick = () => {},
}: InteractiveMapProps) => {
  return (
    <Card className="w-full h-full bg-white p-6 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Parking Map</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => {}}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => {}}
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative w-full h-[500px] border rounded-lg overflow-hidden bg-gray-50">
        {/* Placeholder for actual map image */}
        <div className="absolute inset-0">
          <img
            src="https://dummyimage.com/700x500/e5e7eb/666666&text=Parking+Lot+Map"
            alt="Parking Lot Map"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Parking spots overlay */}
        <div className="absolute inset-0 p-4 grid grid-cols-4 gap-4">
          {parkingSpots.map((spot) => (
            <div
              key={spot.id}
              onClick={() => onSpotClick(spot.id)}
              className={`
                relative p-4 border rounded-md cursor-pointer
                transition-all duration-200
                ${spot.isSelected ? "bg-blue-100 border-blue-500" : "bg-white/80 hover:bg-white"}
                ${spot.isReserved && !spot.isSelected ? "bg-gray-100 cursor-not-allowed" : ""}
              `}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`
                  text-sm font-medium
                  ${spot.isSelected ? "text-blue-700" : "text-gray-700"}
                `}
                >
                  {spot.number}
                </span>
                {spot.isSelected && (
                  <MapPin className="h-4 w-4 text-blue-500" />
                )}
              </div>
              {spot.type && (
                <span className="text-xs text-gray-500 mt-1 block">
                  {spot.type.charAt(0).toUpperCase() + spot.type.slice(1)}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-100 border border-blue-500 rounded"></div>
          <span className="text-sm text-gray-600">Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-100 border border-gray-300 rounded"></div>
          <span className="text-sm text-gray-600">Reserved</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white border border-gray-300 rounded"></div>
          <span className="text-sm text-gray-600">Available</span>
        </div>
      </div>
    </Card>
  );
};

export default InteractiveMap;
