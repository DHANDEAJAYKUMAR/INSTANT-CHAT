export function formatMessageItem(date) {
    const parsedDate = new Date(date);
    
    if (isNaN(parsedDate.getTime())) {
        return ''; // fallback if the date is invalid
    }

    return parsedDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
}
