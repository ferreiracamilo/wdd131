
function getCurrentDateTime(){
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}
  
function updateLastSavedData() {
    const lastSavedDataElement = document.getElementById('last_saved_data');
    if (lastSavedDataElement) {
        lastSavedDataElement.textContent = getCurrentDateTime();
    } else {
        console.error("Element with id 'last_saved_data' not found.");
    }
}
  
window.addEventListener('DOMContentLoaded', () => {
    updateLastSavedData();

    document.addEventListener('input', updateLastSavedData);
});