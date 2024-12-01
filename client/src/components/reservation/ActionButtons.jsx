import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Pencil, X, Navigation } from "lucide-react";

interface ActionButtonsProps {
  onModify?: () => void;
  onCancel?: () => void;
  onGetDirections?: () => void;
  isModifiable?: boolean;
  isCancellable?: boolean;
}

const ActionButtons = ({
  onModify = () => {},
  onCancel = () => {},
  onGetDirections = () => {},
  isModifiable = true,
  isCancellable = true,
}: ActionButtonsProps) => {
  return (
    <Card className="w-full bg-white p-4 flex justify-end items-center gap-4">
      {isModifiable && (
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={onModify}
        >
          <Pencil className="h-4 w-4" />
          Modify Reservation
        </Button>
      )}

      {isCancellable && (
        <Button
          variant="outline"
          className="flex items-center gap-2 text-destructive hover:text-destructive"
          onClick={onCancel}
        >
          <X className="h-4 w-4" />
          Cancel Reservation
        </Button>
      )}

      <Button className="flex items-center gap-2" onClick={onGetDirections}>
        <Navigation className="h-4 w-4" />
        Get Directions
      </Button>
    </Card>
  );
};

export default ActionButtons;
