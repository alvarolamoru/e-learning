import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-demo-e-learning',
  standalone: true,
  imports: [CommonModule,RouterLink,],
  templateUrl: './demo-e-learning.component.html',
  styleUrl: './demo-e-learning.component.css'
})
export class DemoELearningComponent {

}
