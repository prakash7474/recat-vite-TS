import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    data: { activity: string, hour: number }[]
}

export const EnhancedTimeChart = ({ data }: Props) => {
    const multiColors = [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
        '#FF9F40', '#FF6384', '#C9CBCF', '#4BC0C0', '#FF6384',
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'
    ];

    const chartData = {
        labels: data.map(d => d.activity),
        datasets: [{
            data: data.map(d => d.hour),
            backgroundColor: data.map((d, index) => multiColors[index % multiColors.length]),
            borderColor: 'rgba(255, 255, 255, 0.8)',
            borderWidth: 2,
            hoverBorderWidth: 3,
            hoverBackgroundColor: data.map((d, index) => multiColors[index % multiColors.length]),
            hoverBorderColor: 'rgba(255, 255, 255, 1)',
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    padding: 20,
                    usePointStyle: true,
                    font: { size: 14 },
                    color: '#ffffff'
                }
            },
            tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                titleColor: '#1F2937',
                bodyColor: '#1F2937',
                borderColor: '#E5E7EB',
                borderWidth: 1,
                cornerRadius: 12,
                callbacks: {
                    label: function(context: any) {
                        const label = context.label || '';
                        const value = context.parsed || 0;
                        const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
                        const percentage = ((value / total) * 100).toFixed(1);
                        return `${label}: ${value} hours (${percentage}%)`;
                    }
                }
            }
        },
        animation: {
            animateRotate: true,
            animateScale: true,
            duration: 1000,
            easing: 'easeOutQuart' as const
        },
        onHover: (event: any, activeElements: any[]) => {
            if (activeElements.length > 0) {
                event.native.target.style.cursor = 'pointer';
            } else {
                event.native.target.style.cursor = 'default';
            }
        },
        elements: {
            arc: {
                hoverBackgroundColor: (context: any) => {
                    const index = context.dataIndex;
                    return multiColors[index % multiColors.length];
                },
                hoverBorderWidth: 4,
                hoverBorderColor: '#ffffff'
            }
        }
    };

    return (
        <div className="chart-container w-full h-80 md:h-96">
            <Pie data={chartData} options={options} />
        </div>
    );
}
