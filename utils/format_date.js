// export module as formatDate
module.exports = time = {
    format_time: (date) => {
        return date.toLocaleTimeString();
    },
    format_date: (date) => {
        // use local date string to format to MM/DD/YYYY
        return date.toLocaleDateString();
    },
};