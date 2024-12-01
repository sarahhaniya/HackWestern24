import { Card } from "@/components/ui/card";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import { format } from "date-fns";
import SpecialAccommodations from "./SpecialAccommodations";

interface ReservationDetailsProps {
  spotNumber?: string;
  startDate?: Date;
  endDate?: Date;
  location?: {
    name: string;
    address: string;
  };
  specialAccommodations?: {
    hasEvCharging: boolean;
    isAccessible: boolean;
    isCarpoolSpot: boolean;
  };
}

const ReservationDetails = ({
  spotNumber = "A-123",
  startDate = new Date(),
  endDate = new Date(new Date().setHours(new Date().getHours() + 8)),
  location = {
    name: "Main Office Parking",
    address: "123 Corporate Drive, Business Park",
  },
  specialAccommodations = {
    hasEvCharging: true,
    isAccessible: false,
    isCarpoolSpot: false,
  },
}: ReservationDetailsProps) => {
  return (
    <Card className="w-full bg-white p-6 flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Reservation Details
        </h2>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPinIcon className="h-5 w-5 text-gray-500 mt-1" />
            <div>
              <p className="font-medium text-gray-900">Spot {spotNumber}</p>
              <p className="text-sm text-gray-500">{location.name}</p>
              <p className="text-sm text-gray-500">{location.address}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CalendarIcon className="h-5 w-5 text-gray-500" />
            <div>
              <p className="font-medium text-gray-900">
                {format(startDate, "MMMM d, yyyy")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ClockIcon className="h-5 w-5 text-gray-500" />
            <div>
              <p className="font-medium text-gray-900">
                {format(startDate, "h:mm a")} - {format(endDate, "h:mm a")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <SpecialAccommodations
          hasEvCharging={specialAccommodations.hasEvCharging}
          isAccessible={specialAccommodations.isAccessible}
          isCarpoolSpot={specialAccommodations.isCarpoolSpot}
        />
      </div>
    </Card>
  );
};

export default ReservationDetails;
