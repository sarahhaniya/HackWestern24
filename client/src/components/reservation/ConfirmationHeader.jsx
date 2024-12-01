import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ConfirmationHeaderProps {
  reservationId?: string;
  confirmationMessage?: string;
}

const ConfirmationHeader = ({
  reservationId = "RSV-1234567",
  confirmationMessage = "Your parking spot has been successfully reserved!",
}: ConfirmationHeaderProps) => {
  return (
    <Card className="w-full bg-white p-6 border-b">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <CheckCircle className="h-8 w-8 text-green-500" />
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {confirmationMessage}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Reservation ID: {reservationId}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ConfirmationHeader;
