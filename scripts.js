// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Display current time in UTC
    const currentTimeUTC = new Date().toISOString().split('T')[1].split('.')[0];
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC;

    // Display current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[new Date().getUTCDay()];
    document.querySelector('[data-testid="currentDay"]').textContent = currentDay;

    console.log('Website loaded and ready');
});
