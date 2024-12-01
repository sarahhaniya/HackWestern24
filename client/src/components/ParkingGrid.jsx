import React from 'react';
import '../styles/ParkingGrid.css';

const generateDefaultSpots = () =>
{
    const spotsPerRow = 19;
    const spots = [];

    // Top row - all available
    for (let i = 0; i < spotsPerRow; i++)
    {
        spots.push({
            id: `A${(i + 1).toString().padStart(2, '0')}`,
            status: 'available'
        });
    }

    // Three rows of mostly reserved spots
    ['B', 'C', 'D'].forEach(row =>
    {
        for (let i = 0; i < spotsPerRow * 2; i++)
        {
            const isAvailable =
                (row === 'B' && i === 3) ||
                (row === 'C' && i === 1);

            spots.push({
                id: `${row}${(i + 1).toString().padStart(2, '0')}`,
                status: isAvailable ? (row === 'C' ? 'selected' : 'available') : 'reserved'
            });
        }
    });

    return spots;
};

const ParkingSpace = ({ id, status, onClick }) =>
{
    return (
        <div
            className={`parking-space ${status}`}
            onClick={() => onClick(id)}
        >
            {id}
        </div>
    );
};

const ParkingGrid = ({ spots = generateDefaultSpots(), onSpotSelect = () => { } }) =>
{
    return (
        <div className="parking-card">
            <div className="parking-grid">
                {/* Top row - all available */}
                <div className="parking-row">
                    {spots.slice(0, 19).map(spot => (
                        <ParkingSpace
                            key={spot.id}
                            id={spot.id}
                            status={spot.status}
                            onClick={onSpotSelect}
                        />
                    ))}
                </div>

                {/* Second row - mostly reserved */}
                <div className="parking-row">
                    {spots.slice(19, 57).map(spot => (
                        <ParkingSpace
                            key={spot.id}
                            id={spot.id}
                            status={spot.status}
                            onClick={onSpotSelect}
                        />
                    ))}
                </div>

                {/* Third row - mostly reserved with one selected */}
                <div className="parking-row">
                    {spots.slice(57, 95).map(spot => (
                        <ParkingSpace
                            key={spot.id}
                            id={spot.id}
                            status={spot.status}
                            onClick={onSpotSelect}
                        />
                    ))}
                </div>

                {/* Bottom row - all reserved */}
                <div className="parking-row">
                    {spots.slice(95).map(spot => (
                        <ParkingSpace
                            key={spot.id}
                            id={spot.id}
                            status={spot.status}
                            onClick={onSpotSelect}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ParkingGrid;