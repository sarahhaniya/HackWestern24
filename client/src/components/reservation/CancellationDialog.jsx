import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";
  import { AlertTriangle } from "lucide-react";
  
  interface CancellationDialogProps {
    open?: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
    reservationId?: string;
  }
  
  const CancellationDialog = ({
    open = true,
    onConfirm = () => {},
    onCancel = () => {},
    reservationId = "RSV-1234567",
  }: CancellationDialogProps) => {
    return (
      <AlertDialog open={open} onOpenChange={onCancel}>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Cancel Reservation
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600">
              Are you sure you want to cancel your parking reservation{" "}
              <span className="font-medium text-gray-900">{reservationId}</span>?
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={onCancel}
              className="border-gray-200 hover:bg-gray-100 hover:text-gray-900"
            >
              Keep Reservation
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={onConfirm}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Yes, Cancel Reservation
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };
  
  export default CancellationDialog;
  