import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule,RouterOutlet],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css'
})
export class ToolsComponent {

}
