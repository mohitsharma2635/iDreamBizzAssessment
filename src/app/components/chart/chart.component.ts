import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Register required chart types

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit, AfterViewInit {
  @ViewChild('statusChart') statusChartRef!: ElementRef;
  @ViewChild('categoryChart') categoryChartRef!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createStatusChart();
  }

  createStatusChart(): void {
  new Chart(this.statusChartRef.nativeElement, {
    type: 'doughnut',
    data: {
      labels: ['Resolved', 'Unresolved', 'Pending'],
      datasets: [
        {
          label: 'Issue Status',
          data: [45, 25, 30], // More realistic data distribution
          backgroundColor: ['#3B82F6', '#FBBF24', '#10B981'],
          borderWidth: 2,
          borderColor: '#ffffff',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false, // Hide default legend to save space
        },
      },
      cutout: '60%', // Makes it a proper doughnut chart
    },
  });
}
}
