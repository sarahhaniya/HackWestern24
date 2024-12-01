import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthNavbar from './AuthNavbar';

const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#121212', // Dark background for consistency
      color: '#ffffff',
      paddingTop: '4rem', // Ensure content is below the navbar
      fontFamily: 'Arial, sans-serif',
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      backgroundColor: '#1f2937', // Consistent card-like background
      borderRadius: '1rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '2rem',
      textAlign: 'center',
      color: '#e2e8f0',
    },
    select: {
      width: '100%',
      padding: '1rem',
      marginBottom: '1.5rem',
      fontSize: '1rem',
      borderRadius: '0.5rem',
      border: '1px solid #4a5568',
      backgroundColor: '#2d3748',
      color: '#ffffff',
      appearance: 'none', // Remove default styling
      outline: 'none',
      cursor: 'pointer',
      transition: 'border-color 0.2s',
    },
    filterSection: {
      backgroundColor: '#1f2937',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      marginBottom: '2rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    filterTitle: {
      fontSize: '1.2rem',
      marginBottom: '1rem',
      color: '#a0aec0',
    },
    filterOptions: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '1rem',
    },
    filterOption: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem',
      backgroundColor: '#4a5568',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      color: '#ffffff',
    },
    parkingList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginTop: '2rem',
      },
      spotListItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        backgroundColor: '#4a5568',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      spotListNumber: {
        fontWeight: 'bold',
        color: '#e2e8f0',
      },
      spotListType: {
        fontSize: '1rem',
        color: '#cbd5e0',
      },
      selectedSpotListItem: {
        backgroundColor: '#38a169',
      },
      unavailableSpotListItem: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
      submitButton: {
      display: 'block',
      margin: '2rem auto',
      padding: '1rem 3rem',
      backgroundColor: '#4299e1',
      color: '#ffffff',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      fontSize: '1.25rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      transition: 'background-color 0.3s, transform 0.2s',
    },
    submitButtonHover: {
      backgroundColor: '#2b6cb0',
      transform: 'scale(1.05)',
    },
    errorMessage: {
      color: '#e53e3e',
      textAlign: 'center',
      marginTop: '1rem',
    },
  };
// ... (styles object remains the same)

const BookingPage = () => {
    const navigate = useNavigate();
    const [locations, setLocations] = useState([]);
    const [availableSpots, setAvailableSpots] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedSpot, setSelectedSpot] = useState('');
    const [filters, setFilters] = useState({
      is_accessibility_spot: false,
      is_ev: false,
      is_bigger: false,
      is_expecting: false,
      is_front_spot: false,
      is_carpool: false,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const userEmail = 'example@gmail.com';
  
    useEffect(() => {
      fetchLocations();
    }, []);
  
    useEffect(() => {
      if (selectedLocation) {
        fetchAvailableSpots(selectedLocation);
      }
    }, [selectedLocation]);
  
    const fetchLocations = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:3000/api/parking-locations');
        const data = await response.json();
        if (data.success) {
          setLocations(data.data);
        } else {
          setError('Failed to fetch locations');
        }
      } catch (error) {
        console.error('Error fetching locations:', error);
        setError('Failed to fetch locations');
      }
      setLoading(false);
    };
  
    const fetchAvailableSpots = async (locationId) => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/api/available-spots/${locationId}`);
        const data = await response.json();
        if (data.success) {
          setAvailableSpots(data.data);
        } else {
          setError('No available spots found for the selected location');
        }
      } catch (error) {
        console.error('Error fetching available spots:', error);
        setError('Failed to fetch available spots');
      }
      setLoading(false);
    };
  
    const handleSpotSelect = (spot) => {
      if (!spot.is_available) return;
      setSelectedSpot(spot.spot_number);
    };
  
    const renderParkingSpots = () => {
      const filteredSpots = availableSpots.filter((spot) =>
        Object.entries(filters).every(([key, value]) => !value || spot[key])
      );
  
      if (filteredSpots.length === 0) {
        return <div style={{ textAlign: 'center', color: '#cbd5e0' }}>No spots available</div>;
      }
  
      return (
        <div style={styles.parkingList}>
          {filteredSpots.map((spot) => {
            const isSelected = selectedSpot === spot.spot_number;
  
            return (
              <div
                key={spot.spot_number}
                style={{
                  ...styles.spotListItem,
                  ...(isSelected ? styles.selectedSpotListItem : {}),
                  ...(spot.is_available ? {} : styles.unavailableSpotListItem),
                }}
                onClick={() => handleSpotSelect(spot)}
              >
                <span style={styles.spotListNumber}>Spot {spot.spot_number}</span>
                <div style={styles.spotListType}>
                  {spot.is_accessibility_spot && '♿'}
                  {spot.is_ev && '⚡'}
                  {spot.is_expecting && '🤰'}
                  {spot.is_bigger && '🚙'}
                  {spot.is_front_spot && '🏃'}
                  {spot.is_carpool && '👥'}
                </div>
              </div>
            );
          })}
        </div>
      );
    };
  
    const handleSubmit = async () => {
        if (!selectedSpot) {
          setError('Please select a parking spot');
          return;
        }
      
        try {
          const response = await fetch('http://localhost:3000/api/reservations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              spot_id: selectedSpot, // Spot ID selected by the user
              user_email: userEmail, // Hardcoded user email (replace with dynamic email in production)
            }),
          });
      
          const data = await response.json();
          if (data.success) {
            // Display success message or redirect to reservation details page
            alert(`Reservation successful! Reservation ID: ${data.data.reservation_id}`);
            navigate('/ReservationPage'); // Navigate to reservation details page
          } else {
            setError(data.error || 'Failed to reserve spot');
          }
        } catch (error) {
          console.error('Error creating reservation:', error);
          setError('Failed to create reservation');
        }
      };
      
  
    if (loading) {
      return (
        <div style={styles.container}>
          <AuthNavbar />
          <div style={styles.content}>
            <h1 style={styles.title}>Loading...</h1>
          </div>
        </div>
      );
    }
  
    return (
      <div style={styles.container}>
        <AuthNavbar />
        <div style={styles.content}>
          <h1 style={styles.title}>Book a Parking Spot</h1>
  
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            style={styles.select}
          >
            <option value="">Select a location</option>
            {locations.map((loc) => (
              <option key={loc.location_id} value={loc.location_id}>
                {loc.location_name}
              </option>
            ))}
          </select>
  
          {selectedLocation && (
            <>
              <div style={styles.filterSection}>
                <h2 style={styles.filterTitle}>Filter Spots By:</h2>
                <div style={styles.filterOptions}>
                  {Object.entries(filters).map(([key, value]) => (
                    <label key={key} style={styles.filterOption}>
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={(e) =>
                          setFilters((prev) => ({
                            ...prev,
                            [key]: e.target.checked,
                          }))
                        }
                      />
                      {key.replace('is_', '').replace('_', ' ')}
                    </label>
                  ))}
                </div>
              </div>
  
              {renderParkingSpots()}
  
              <button onClick={handleSubmit} style={styles.submitButton} disabled={!selectedSpot}>
                Reserve Spot {selectedSpot}
              </button>
  
              {error && <div style={styles.errorMessage}>{error}</div>}
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default BookingPage;
  