import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor
import { RouterModule } from '@angular/router'; // Import RouterModule for routerLink

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add CommonModule and RouterModule here
  templateUrl: './vehicle-list.html',  // Corrected templateUrl
  styleUrls: ['./vehicle-list.css']   // Corrected styleUrls
})
export class VehicleListComponent {
  vehicles = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2022, price: 25000, imageUrl: 'https://via.placeholder.com/300x200.png?text=Toyota+Camry' },
    { id: 2, make: 'Honda', model: 'Civic', year: 2023, price: 23000, imageUrl: 'https://via.placeholder.com/300x200.png?text=Honda+Civic' },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2024, price: 45000, imageUrl: 'https://via.placeholder.com/300x200.png?text=Ford+Mustang' },
    { id: 4, make: 'Chevrolet', model: 'Silverado', year: 2022, price: 35000, imageUrl: 'https://via.placeholder.com/300x200.png?text=Chevrolet+Silverado' },
    { id: 5, make: 'Nissan', model: 'Altima', year: 2023, price: 24000, imageUrl: 'https://via.placeholder.com/300x200.png?text=Nissan+Altima' }
  ];

  constructor() { }
}
