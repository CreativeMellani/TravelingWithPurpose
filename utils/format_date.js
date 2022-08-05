// export module as formatDate
module.exports = formatDate = {
    format_date: (data) => {
        // use local date string to format to MM/DD/YYYY
        return date.toLocaleDateString();
    },
};