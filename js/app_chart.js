// In your JavaScript file (e.g., app.js)
const ctx = document.getElementById('myChart').getContext('2d');
const chartData = {
    labels: ['ID 1', 'ID 2', 'ID 3', 'ID 4', 'ID 5', 'ID 6'],
    datasets: [{
        label: 'Usage Statistics',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
    }],
};

const myChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
});


const consolePanel = document.querySelector('.console_panel');
const consoleTextElement = document.querySelector('.console_text');

// Function to get the current time in HH:MM:SS format
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

const serverLogs = [
    "Server started successfully",
    "Memory usage: 50% (2GB out of 4GB)",
    "CPU load: 25%",
    "Disk space: 60% used (120GB out of 200GB)",
    "Network traffic: 100 Mbps",
    "Server uptime: 7 days, 3 hours, 12 minutes",
    "Warning: High CPU load detected (85%)",
    "Disk space alert: Running low on available disk space (90% used)",
    "Server restarted",
    "Server stopped",
    "Database connection established",
    "Database query executed successfully",
    "Security update installed",
    "Backup completed",
    "User login: user123",
    "User logout: user123",
    "File uploaded: file.txt",
    "File deleted: file.txt",
    "Server configuration updated",
    "Server started successfully",
    "Memory usage: 50% (2GB out of 4GB)",
    "CPU load: 25%",
    "Disk space: 60% used (120GB out of 200GB)",
    "Network traffic: 100 Mbps",
    "Server uptime: 7 days, 3 hours, 12 minutes",
    "Warning: High CPU load detected (85%)",
    "Disk space alert: Running low on available disk space (90% used)",
    "Server restarted",
    "Server stopped",
    "Database connection established",
    "Database query executed successfully",
    "Security update installed",
    "Backup completed",
    "User login: user123",
    "User logout: user123",
    "File uploaded: file.txt",
    "File deleted: file.txt",
    "Server configuration updated",
    "Server started successfully",
    "Memory usage: 50% (2GB out of 4GB)",
    "CPU load: 25%",
    "Disk space: 60% used (120GB out of 200GB)",
    "Network traffic: 100 Mbps",
    "Server uptime: 7 days, 3 hours, 12 minutes",
    "Warning: High CPU load detected (85%)",
    "Disk space alert: Running low on available disk space (90% used)",
    "Server restarted",
    "Server stopped",
    "Database connection established",
    "Database query executed successfully",
    "Security update installed",
    "Backup completed",
    "User login: user123",
    "User logout: user123",
    "File uploaded: file.txt",
    "File deleted: file.txt",
    "Server configuration updated",
    "Server started successfully",
    "Memory usage: 50% (2GB out of 4GB)",
    "CPU load: 25%",
    "Disk space: 60% used (120GB out of 200GB)",
    "Network traffic: 100 Mbps",
    "Server uptime: 7 days, 3 hours, 12 minutes",
    "Warning: High CPU load detected (85%)",
    "Disk space alert: Running low on available disk space (90% used)",
    "Server restarted",
    "Server stopped",
    "Database connection established",
    "Database query executed successfully",
    "Security update installed",
    "Backup completed",
    "User login: user123",
    "User logout: user123",
    "File uploaded: file.txt",
    "File deleted: file.txt",
    "Server configuration updated",
    "Server started successfully",
    "Memory usage: 50% (2GB out of 4GB)",
    "CPU load: 25%",
    "Disk space: 60% used (120GB out of 200GB)",
    "Network traffic: 100 Mbps",
    "Server uptime: 7 days, 3 hours, 12 minutes",
    "Warning: High CPU load detected (85%)",
    "Disk space alert: Running low on available disk space (90% used)",
    "Server restarted",
    "Server stopped",
    "Database connection established",
    "Database query executed successfully",
    "Security update installed",
    "Backup completed",
    "User login: user123",
    "User logout: user123",
    "File uploaded: file.txt",
    "File deleted: file.txt",
    "Server configuration updated",
    "Server started successfully",
    "Memory usage: 50% (2GB out of 4GB)",
    "CPU load: 25%",
    "Disk space: 60% used (120GB out of 200GB)",
    "Network traffic: 100 Mbps",
    "Server uptime: 7 days, 3 hours, 12 minutes",
    "Warning: High CPU load detected (85%)",
    "Disk space alert: Running low on available disk space (90% used)",
    "Server restarted",
    "Server stopped",
    "Database connection established",
    "Database query executed successfully",
    "Security update installed",
    "Backup completed",
    "User login: user123",
    "User logout: user123",
    "File uploaded: file.txt",
    "File deleted: file.txt",
    "Server configuration updated"
];

function appendConsoleText(text) {
    // Add a new line break before appending text
    const newText = "\n[" + getCurrentTime() + "] " + text;

    // Append text to the console
    consoleTextElement.textContent += newText;

    // Scroll to the bottom of the console for better visibility of new messages
    consolePanel.scrollTop = consolePanel.scrollHeight;
}

for (let i = 0; i < serverLogs.length; i++) {
    setTimeout(() => {
        appendConsoleText(serverLogs[i]);
    }, i * 1000); // Logs are displayed with a 2-second interval
}