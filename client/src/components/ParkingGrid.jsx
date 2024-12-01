import React, { useState } from 'react';
import '../styles/ParkingGrid.css';

const generateDefaultSpots = () =>
{
    const spotsPerRow = 19;
    const spots = [];

    // Mock API response - in reality this would come from your backend
    const mockApiCheck = (id) =>
    {
        // Simulate some spots being reserved - only these spots will be unavailable
        const reservedSpots = ['A01', 'B03', 'C04', 'D05'];
        return reservedSpots.includes(id) ? 'reserved' : 'available';  // Changed 'empty' to 'available'
    };

    // Top row
    for (let i = 0; i < spotsPerRow; i++)
    {
        const id = `A${(i + 1).toString().padStart(2, '0')}`;
        spots.push({
            id: id,
            status: mockApiCheck(id)
        });
    }

    // Three rows
    ['B', 'C', 'D'].forEach(row =>
    {
        for (let i = 0; i < spotsPerRow * 2; i++)
        {
            const id = `${row}${(i + 1).toString().padStart(2, '0')}`;
            spots.push({
                id: id,
                status: mockApiCheck(id)
            });
        }
    });

    return spots;
};

const ParkingSpace = ({ id, status, isSelected, onClick }) =>
{
    let displayStatus;

    if (status === 'reserved')
    {
        displayStatus = 'disabled';
    } else if (isSelected)
    {
        displayStatus = 'selected';
    } else
    {
        displayStatus = 'available';
    }

    return (
        <div
            className={`parking-space ${displayStatus}`}
            onClick={() =>
            {
                if (status !== 'reserved')
                {
                    onClick(id);
                    console.log(`Parking space ${id} clicked. Status: ${status}`);
                }
            }}
        >
            {id}
        </div>
    );
};

const ParkingGrid = () =>
{
    const [spots] = useState(generateDefaultSpots());
    const [selectedSpot, setSelectedSpot] = useState(null);

    const handleSpotSelect = (id) =>
    {
        setSelectedSpot(selectedSpot === id ? null : id);
    };

    return (
        <div className="parking-card">
            <div className="parking-grid">
                {/* Top row */}
                <div className="parking-row">
                    {spots.slice(0, 19).map(spot => (
                        <ParkingSpace
                            key={spot.id}
                            id={spot.id}
                            status={spot.status}
                            isSelected={selectedSpot === spot.id}
                            onClick={handleSpotSelect}
                        />
                    ))}
                </div>

                {/* Second row */}
                <div className="parking-row">
                    {spots.slice(19, 57).map(spot => (
                        <ParkingSpace
                            key={spot.id}
                            id={spot.id}
                            status={spot.status}
                            isSelected={selectedSpot === spot.id}
                            onClick={handleSpotSelect}
                        />
                    ))}
                </div>

                {/* Third row */}
                <div className="parking-row">
                    {spots.slice(57, 95).map(spot => (
                        <ParkingSpace
                            key={spot.id}
                            id={spot.id}
                            status={spot.status}
                            isSelected={selectedSpot === spot.id}
                            onClick={handleSpotSelect}
                        />
                    ))}
                </div>

                {/* Bottom row */}
                <div className="parking-row">
                    {spots.slice(95).map(spot => (
                        <ParkingSpace
                            key={spot.id}
                            id={spot.id}
                            status={spot.status}
                            isSelected={selectedSpot === spot.id}
                            onClick={handleSpotSelect}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ParkingGrid;