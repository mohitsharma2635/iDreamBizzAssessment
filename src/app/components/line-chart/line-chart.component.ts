import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, AfterViewInit {
  
  @ViewChild('categoryChart') categoryChartRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createCategoryChart();
  }

  createCategoryChart(): void {
  new Chart(this.categoryChartRef.nativeElement, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          data: [65, 78, 45, 81, 56, 85],
          backgroundColor: '#1E3A8A', // Dark blue color
          borderRadius: 4,
          maxBarThickness: 10, 
        }
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            font: {
              size: 11,
            },
            color: '#6B7280',
          },
        },
        y: {
          beginAtZero: true,
          grid: {
            color: '#F3F4F6',
          },
          ticks: {
            font: {
              size: 11,
            },
            color: '#6B7280',
          },
        },
      },
    },
  });
}
}