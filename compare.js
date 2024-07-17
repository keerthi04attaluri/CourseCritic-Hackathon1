const courses = [
    { id: 1, name: 'Introduction to Algorithms', professor: 'Dr. Smith', rating: 4, workload: 3, difficulty: 4, department: 'CS' },
    { id: 2, name: 'Database Systems', professor: 'Dr. Garcia', rating: 4, workload: 4, difficulty: 3, department: 'CS' },
    { id: 3, name: 'Computer Networks', professor: 'Dr. Lee', rating: 4, workload: 4, difficulty: 4, department: 'CS' },
    { id: 4, name: 'Operating Systems', professor: 'Dr. Martinez', rating: 4, workload: 4, difficulty: 4, department: 'CS' },
    { id: 5, name: 'Software Engineering', professor: 'Dr. Brown', rating: 4, workload: 3, difficulty: 4, department: 'CS' },
    { id: 6, name: 'Discrete Mathematics', professor: 'Dr. Taylor', rating: 4, workload: 3, difficulty: 3, department: 'Math' },
    { id: 7, name: 'Artificial Intelligence', professor: 'Dr. Kim', rating: 4, workload: 4, difficulty: 4, department: 'CS' },
    { id: 8, name: 'Machine Learning', professor: 'Dr. Wang', rating: 4, workload: 4, difficulty: 4, department: 'CS' },
    { id: 9, name: 'Web Development', professor: 'Dr. Rodriguez', rating: 4, workload: 4, difficulty: 3, department: 'CS' },
    { id: 10, name: 'Computer Graphics', professor: 'Dr. Harris', rating: 4, workload: 4, difficulty: 4, department: 'CS' },
    { id: 11, name: 'Introduction to Computer Science', professor: 'Dr. Smith', rating: 4, workload: 3, difficulty: 4, department: 'CS' },
    { id: 12, name: 'Data Structures', professor: 'Dr. Johnson', rating: 4, workload: 4, difficulty: 4, department: 'CS' },
];

document.getElementById('compare-form').addEventListener('submit', function (event) {
    event.preventDefault();
    compareCourses();
});

function compareCourses() {
    const course1Name = document.getElementById('course1').value.toLowerCase();
    const course2Name = document.getElementById('course2').value.toLowerCase();

    const course1 = courses.find(course => course.name.toLowerCase() === course1Name);
    const course2 = courses.find(course => course.name.toLowerCase() === course2Name);

    if (course1 && course2) {
        const ctx = document.getElementById('comparisonChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Rating', 'Workload', 'Difficulty'],
                datasets: [
                    {
                        label: course1.name,
                        data: [course1.rating, course1.workload, course1.difficulty],
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    },
                    {
                        label: course2.name,
                        data: [course2.rating, course2.workload, course2.difficulty],
                        backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 5
                    }
                }
            }
        });
    } else {
        alert('One or both courses not found. Please check the course names.');
    }
}


