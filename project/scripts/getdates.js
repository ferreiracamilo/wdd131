document.addEventListener('DOMContentLoaded', function() {
    // Get the last modified date of the document
    const lastModifiedDate = new Date(document.lastModified);
    const formattedLastModifiedDate = lastModifiedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
    // Update the last modified date in the second paragraph
    const lastModifiedElement = document.querySelector('#lastModified');
    lastModifiedElement.textContent = formattedLastModifiedDate;
});