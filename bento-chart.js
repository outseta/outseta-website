const ctx = document.getElementById('myLineChart').getContext('2d');
const myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            'Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 
            'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024', 
            'Nov 2024', 'Dec 2024'
        ],
        datasets: [{
        label: 'MMR',
        data: [
            35341, 
            36500, 
            37800, 
            36952, 
            37220, 
            37805, 
            38230, 
            39679, 
            42225, 
            44000, 
            48302, 
            49835
          ],
        borderColor: '#ff4281',
        borderWidth: 1,
        pointStyle: false,
        tension: 0.2,
        backgroundColor: 'hsl(340, 100%, 63%, 0.1)',
        fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
              display: false
            },
            tooltip: {
                backgroundColor: '#240029',
                caretSize: 0,
                callbacks: {
                    title: function() {
                        return ''; // Prevents the data label from being shown in the title
                    },
                    label: function(tooltipItem) {
                      // Customize the label content here; only display the label and value
                      return `${tooltipItem.label} $${tooltipItem.formattedValue}`;
                    }
                },
                bodyFont: {
                  family: 'Inter Var',
                  weight: '400'
                },
                displayColors: false
            }
        },
        interaction: {
            axis: 'x',
            mode: 'nearest',
            intersect: false
        },
        scales: {
            x: {
                display: false
            },
            y: {
                grid: { 
                    display: true,
                    color: 'rgba(41, 0, 41, 0.05)'
                },
                ticks: {
                    display: false
                },
                border: {
                    display: false
                }
            }   
        }
    }
});