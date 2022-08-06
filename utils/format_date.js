// export module as formatDate
module.exports = formatDate = {
    format_date: (date) => {
        // use local date string to format to MM/DD/YYYY
        return date.toLocaleDateString();
    },
};