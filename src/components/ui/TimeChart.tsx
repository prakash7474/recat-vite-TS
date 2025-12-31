import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    data: { activity: string, hour: number }[]
}

export const TimeChart = ({ data }: Props) => {
    const chartData = {
        labels: data.map(d => d.activity),
        datasets: [{
            data: data.map(d => d.hour),
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"],
            borderWidth: 1
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            tooltip: {
                callbacks: {
                    label: function(context: any) {
                        const label = context.label || '';
                        const value = context.parsed || 0;
                        return `${label}: ${value} hours`;
                    }
                }
            }
        }
    };

    return <Pie data={chartData} options={options} />;
}
