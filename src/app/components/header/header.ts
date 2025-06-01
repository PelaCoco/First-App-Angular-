import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule], // Add RouterModule here
  templateUrl: './header.html',  // Corrected templateUrl
  styleUrls: ['./header.css']   // Corrected styleUrls
})
export class HeaderComponent {
  constructor() { }
}
