import React, { useState } from 'react';
import AuthNavbar from './AuthNavbar';
import parkinglotpic from '../assets/parkinglot.png';

const ReservationPage = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchEmail, setSearchEmail] = useState('');

  const handleSearch = async () => {
    if (!searchEmail) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setError(null);
    setReservations([]);

    try {
      const response = await fetch(`http://localhost:3000/api/reservations/${searchEmail}`);
      const data = await response.json();

      if (data.success) {
        setReservations(data.data);
      } else {
        setError(data.error || 'No reservations found for this email.');
      }
    } catch (err) {
      setError('Failed to fetch reservations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#121212',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '4rem',
    },
    searchSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '2rem',
    },
    searchInput: {
      width: '300px',
      padding: '0.5rem',
      fontSize: '1rem',
      borderRadius: '8px 0 0 8px',
      border: '1px solid #4a5568',
      outline: 'none',
    },
    searchButton: {
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      borderRadius: '0 8px 8px 0',
      border: 'none',
      backgroundColor: '#4299e1',
      color: '#ffffff',
      cursor: 'pointer',
      outline: 'none',
    },
    mainContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '800px',
    },
    reservationCard: {
      backgroundColor: '#1f2937',
      borderRadius: '8px',
      padding: '10px',
      marginBottom: '1rem',
      width: '100%',
    },
    detailRow: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '0.5rem',
    },
    label: {
      minWidth: '150px',
      color: '#cbd5e0',
      fontWeight: 'bold',
    },
    value: {
      color: '#ffffff',
    },
    noReservations: {
      fontSize: '1.5rem',
      textAlign: 'center',
      color: '#ffffff',
      marginTop: '2rem',
    },
    errorMessage: {
      color: '#e53e3e',
      textAlign: 'center',
      marginTop: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <AuthNavbar />
      <div style={styles.searchSection}>
        <input
          type="email"
          placeholder="Enter email to search reservations"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          style={styles.searchInput}
        />
        <button onClick={handleSearch} style={styles.searchButton}>
          Search
        </button>
      </div>

      <div style={styles.mainContent}>
        {loading && <div>Loading reservations...</div>}
        {error && <div style={styles.errorMessage}>{error}</div>}
        {reservations.length === 0 && !loading && !error && (
          <div style={styles.noReservations}>No reservations found.</div>
        )}
        {reservations.map((reservation) => (
          <div key={reservation._id} style={styles.reservationCard}>
            <div style={styles.detailRow}>
              <span style={styles.label}>Parking Spot:</span>
              <span style={styles.value}>{reservation.spot_number}</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.label}>Date:</span>
              <span style={styles.value}>
                {new Date(reservation.reservation_date).toLocaleDateString()}
              </span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.label}>Accommodations:</span>
              <span style={styles.value}>
                {reservation.is_accessibility_spot && 'Wheelchair Accessible '}
                {reservation.is_ev && 'EV '}
                {reservation.is_bigger && 'Larger Spot '}
                {reservation.is_expecting && 'Expectant Mother '}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationPage;