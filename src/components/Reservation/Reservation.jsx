import React, { useEffect } from 'react';

const Reservation = () => {
  useEffect(() => {
    // Create the HostMe script element
    const script = document.createElement('script');
    script.src =
      'https://tables.hostmeapp.com/widgets/reservation/hostme-widget-reservation.es.js';
    script.type = 'module';
    script.async = true;

    // Append the script to the body of the document
    document.body.appendChild(script);

    // Cleanup: remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className='reservation-container'>
      {/* HostMe Widget: This is where the widget will render */}
      <hostme-widget-reservation
        data-hostme-id='32514'
        data-widget-type='horizontal'
        data-time-select='step'
        data-allow-fast-booking='true'
        data-color-scheme='light'
      ></hostme-widget-reservation>
    </div>
  );
};

export default Reservation;
