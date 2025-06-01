import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router'; // Import RouterModule for the back button
import { CommonModule } from '@angular/common'; // For *ngIf

@Component({
  selector: 'app-vehicle-details',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add CommonModule and RouterModule
  templateUrl: './vehicle-details.html',  // Corrected templateUrl
  styleUrls: ['./vehicle-details.css']   // Corrected styleUrls
})
export class VehicleDetailsComponent implements OnInit {
  vehicle: any; // Use 'any' for simplicity with placeholder, define a proper interface later

  // Placeholder data for five different vehicles
  private allVehicles = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2022, price: 25000, imageUrl: 'https://via.placeholder.com/600x400.png?text=Toyota+Camry', description: 'A reliable and comfortable sedan, perfect for families and daily commutes. Features advanced safety systems and excellent fuel economy.' },
    { id: 2, make: 'Honda', model: 'Civic', year: 2023, price: 23000, imageUrl: 'https://via.placeholder.com/600x400.png?text=Honda+Civic', description: 'Sporty and efficient, the Honda Civic offers a fun driving experience with modern tech. Known for its longevity and resale value.' },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2024, price: 45000, imageUrl: 'https://via.placeholder.com/600x400.png?text=Ford+Mustang', description: 'The iconic American muscle car, delivering thrilling performance and head-turning style. Available with powerful engine options.' },
    { id: 4, make: 'Chevrolet', model: 'Silverado', year: 2022, price: 35000, imageUrl: 'https://via.placeholder.com/600x400.png?text=Chevrolet+Silverado', description: 'A robust and versatile pickup truck, ready for work or adventure. Offers impressive towing capacity and a comfortable cabin.' },
    { id: 5, make: 'Nissan', model: 'Altima', year: 2023, price: 24000, imageUrl: 'https://via.placeholder.com/600x400.png?text=Nissan+Altima', description: 'A stylish mid-size sedan with a smooth ride and user-friendly features. Good balance of comfort and efficiency.' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // In a real app, you would get the ID from the route and fetch the specific vehicle.
    // For now, we'll simulate this by trying to find a vehicle or defaulting to the first one.
    const idFromRoute = this.route.snapshot.paramMap.get('id');
    if (idFromRoute) {
      const vehicleId = parseInt(idFromRoute, 10);
      this.vehicle = this.allVehicles.find(v => v.id === vehicleId);
    }
    // If no ID in route or vehicle not found, display a default or handle error
    if (!this.vehicle) {
      this.vehicle = this.allVehicles[0]; // Default to the first vehicle for now
      console.warn('VehicleDetailsComponent: Could not find vehicle with ID from route, or no ID provided. Displaying default vehicle.');
    }
  }
}
