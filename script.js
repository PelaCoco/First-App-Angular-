document.addEventListener('DOMContentLoaded', () => {
  const vehicleListings = document.querySelectorAll('.vehicle-listing');

  vehicleListings.forEach(listing => {
    listing.addEventListener('click', () => {
      alert('You clicked on a vehicle! More details coming soon.');
    });
  });
});
