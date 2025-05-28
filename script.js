 const quotes = [
            "The trouble is, you think you have time. — Buddha",
            "Time is what we want most, but what we use worst. — William Penn",
            "Life is not measured by the number of breaths we take, but by the moments that take our breath away. — Maya Angelou",
            "The future depends on what you do today. — Mahatma Gandhi",
            "Yesterday is history, tomorrow is a mystery, today is a gift. — Eleanor Roosevelt",
            "Time flies over us, but leaves its shadow behind. — Nathaniel Hawthorne",
            "Don't wait. The time will never be just right. — Napoleon Hill"
        ];

        function toggleTheme() {
            document.body.classList.toggle('dark');
            const toggle = document.querySelector('.theme-toggle');
            toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
        }

        function calculateWeeks() {
            const birthdate = document.getElementById('birthdate').value;
            const lifespan = parseInt(document.getElementById('lifespan').value);

            if (!birthdate) {
                alert('Please enter your birth date');
                return;
            }

            const birth = new Date(birthdate);
            const today = new Date();
            const msPerWeek = 7 * 24 * 60 * 60 * 1000;
            
            const weeksLived = Math.floor((today - birth) / msPerWeek);
            const totalWeeks = Math.floor(lifespan * 52.1775);
            const weeksRemaining = Math.max(0, totalWeeks - weeksLived);
            const percentageLived = Math.min(100, Math.round((weeksLived / totalWeeks) * 100));

            // Update stats
            document.getElementById('weeksLived').textContent = weeksLived.toLocaleString();
            document.getElementById('weeksRemaining').textContent = weeksRemaining.toLocaleString();
            document.getElementById('percentageLived').textContent = percentageLived + '%';

            // Show results
            document.getElementById('results').style.display = 'block';
            document.getElementById('results').classList.add('fade-in');

            // Generate visualization
            generateVisualization(weeksLived, totalWeeks, birth);
            
            // Show visualization
            document.getElementById('visualization').style.display = 'block';
            document.getElementById('visualization').classList.add('fade-in');

            // Show random quote
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            document.getElementById('quote').textContent = randomQuote;
        }

        function generateVisualization(weeksLived, totalWeeks, birthDate) {
            const grid = document.getElementById('weeksGrid');
            grid.innerHTML = '';

            for (let week = 0; week < totalWeeks; week++) {
                const square = document.createElement('div');
                square.className = 'week-square';
                
                if (week < weeksLived) {
                    square.classList.add('lived');
                } else {
                    square.classList.add('remaining');
                }

                // Calculate age for tooltip
                const weekDate = new Date(birthDate);
                weekDate.setDate(weekDate.getDate() + (week * 7));
                const ageInYears = (week / 52.1775).toFixed(1);
                
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = `Week ${week + 1} • Age ${ageInYears}`;
                square.appendChild(tooltip);

                grid.appendChild(square);
            }
        }

        // Set default date to today minus 25 years as an example
        window.addEventListener('DOMContentLoaded', function() {
            const today = new Date();
            const defaultDate = new Date(today.getFullYear() - 25, today.getMonth(), today.getDate());
            document.getElementById('birthdate').value = defaultDate.toISOString().split('T')[0];
        });