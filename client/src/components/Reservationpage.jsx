import { useState } from "react";
import ConfirmationHeader from "./reservation/ConfirmationHeader";
import ReservationDetails from "./reservation/ReservationDetails";
import InteractiveMap from "./reservation/InteractiveMap";
import ActionButtons from "./reservation/ActionButtons";
import CancellationDialog from "./reservation/CancellationDialog";
import ModificationSheet from "./reservation/ModificationSheet";

function Home() {
  const [showCancellationDialog, setShowCancellationDialog] = useState(false);
  const [showModificationSheet, setShowModificationSheet] = useState(false);

  const handleModify = () => {
    setShowModificationSheet(true);
  };

  const handleCancel = () => {
    setShowCancellationDialog(true);
  };

  const handleGetDirections = () => {
    // Placeholder for directions functionality
    window.open("https://maps.google.com", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <ConfirmationHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <ReservationDetails />
          </div>

          <div className="lg:col-span-8">
            <InteractiveMap />
          </div>
        </div>

        <ActionButtons
          onModify={handleModify}
          onCancel={handleCancel}
          onGetDirections={handleGetDirections}
        />

        <CancellationDialog
          open={showCancellationDialog}
          onCancel={() => setShowCancellationDialog(false)}
          onConfirm={() => {
            setShowCancellationDialog(false);
            // Handle cancellation logic here
          }}
        />

        <ModificationSheet
          open={showModificationSheet}
          onClose={() => setShowModificationSheet(false)}
          onSave={(data) => {
            setShowModificationSheet(false);
            // Handle save modifications logic here
            console.log("Modified data:", data);
          }}
        />
      </div>
    </div>
  );
}

export default Home;
