import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Calendar } from "@/components/ui/calendar";
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
  import { format } from "date-fns";
  import { CalendarIcon, Clock } from "lucide-react";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
  interface ModificationSheetProps {
    open?: boolean;
    onClose?: () => void;
    onSave?: (data: ModificationData) => void;
    currentData?: ModificationData;
  }
  
  interface ModificationData {
    spotNumber: string;
    date: Date;
    startTime: string;
    endTime: string;
    specialRequirements: {
      evCharging: boolean;
      accessible: boolean;
      carpool: boolean;
    };
  }
  
  const ModificationSheet = ({
    open = true,
    onClose = () => {},
    onSave = () => {},
    currentData = {
      spotNumber: "A-123",
      date: new Date(),
      startTime: "09:00",
      endTime: "17:00",
      specialRequirements: {
        evCharging: true,
        accessible: false,
        carpool: false,
      },
    },
  }: ModificationSheetProps) => {
    return (
      <Sheet open={open} onOpenChange={onClose}>
        <SheetContent className="w-[500px] bg-white overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-xl font-semibold text-gray-900">
              Modify Reservation
            </SheetTitle>
          </SheetHeader>
  
          <div className="mt-6 space-y-6">
            {/* Spot Selection */}
            <div className="space-y-2">
              <Label htmlFor="spot">Parking Spot</Label>
              <Select defaultValue={currentData.spotNumber}>
                <SelectTrigger>
                  <SelectValue placeholder="Select spot" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A-123">A-123 (EV Charging)</SelectItem>
                  <SelectItem value="A-124">A-124 (Standard)</SelectItem>
                  <SelectItem value="A-125">A-125 (Accessible)</SelectItem>
                  <SelectItem value="A-126">A-126 (Carpool)</SelectItem>
                </SelectContent>
              </Select>
            </div>
  
            {/* Date Selection */}
            <div className="space-y-2">
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(currentData.date, "PPP")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={currentData.date}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
  
            {/* Time Selection */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startTime">Start Time</Label>
                <Select defaultValue={currentData.startTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }, (_, i) => {
                      const hour = i.toString().padStart(2, "0");
                      return (
                        <SelectItem key={`${hour}:00`} value={`${hour}:00`}>
                          {`${hour}:00`}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
  
              <div className="space-y-2">
                <Label htmlFor="endTime">End Time</Label>
                <Select defaultValue={currentData.endTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }, (_, i) => {
                      const hour = i.toString().padStart(2, "0");
                      return (
                        <SelectItem key={`${hour}:00`} value={`${hour}:00`}>
                          {`${hour}:00`}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
            </div>
  
            {/* Special Requirements */}
            <div className="space-y-4">
              <Label>Special Requirements</Label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    defaultChecked={currentData.specialRequirements.evCharging}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <span className="text-sm text-gray-700">
                    EV Charging Required
                  </span>
                </label>
  
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    defaultChecked={currentData.specialRequirements.accessible}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <span className="text-sm text-gray-700">
                    Accessible Spot Required
                  </span>
                </label>
  
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    defaultChecked={currentData.specialRequirements.carpool}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <span className="text-sm text-gray-700">Carpool Spot</span>
                </label>
              </div>
            </div>
  
            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-6">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={() => onSave(currentData)}>Save Changes</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  };
  
  export default ModificationSheet;
  