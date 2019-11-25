export const sortArrayByDate = array =>
  array.sort(function(a, b) {
    return (new Date(b.date || b.date_start) - new Date(a.date || a.date_start)) || 0;
  });
