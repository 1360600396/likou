function calculateEmploymentDuration(hireDateStr, endDateStr) {
  
  const hireDate = +new Date(hireDateStr);
  const endDate = endDateStr==0?+new Date():+new Date(endDateStr);

  const timeDiff = endDate - hireDate;
  const days = timeDiff / (1000 * 3600 * 24);

  return days;
}

console.log(calculateEmploymentDuration('2024-06-10',0))

