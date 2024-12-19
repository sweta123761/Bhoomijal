document.getElementById('graphModal').addEventListener('shown.bs.modal', function () {
    const myChartModal = new Chart(document.getElementById('myChartModal'), {
        type: 'line',
        data: {
            labels: ['Rajasthan', 'Maharashtra', 'Karnataka', 'Bihar', 'West Bengal'],
            datasets: [{
                label: 'Groundwater Levels (in meters)',
                data: [150, 200, 120, 100, 80],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Groundwater Levels (m)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'States'
                    }
                }
            }
        }
    });
});
// JavaScript for Community Engagement Interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Event listener for Upcoming Events button
    document.querySelector('.btn-primary[href="#events"]').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to Upcoming Events page...');
        // Here you can add logic to navigate to the events page
        // window.location.href = 'events.html'; // Uncomment and set the correct path
    });

    // Event listener for Resources button
    document.querySelector('.btn-primary[href="#resources"]').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to Resources page...');
        // Here you can add logic to navigate to the resources page
        // window.location.href = 'resources.html'; // Uncomment and set the correct path
    });

    // Event listener for Share Your Story button
    document.querySelector('.btn-primary[href="#share"]').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to Share Your Story page...');
        // Here you can add logic to navigate to the share story page
        // window.location.href = 'share.html'; // Uncomment and set the correct path
    });
});