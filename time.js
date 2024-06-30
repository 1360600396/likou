function calculateEmploymentDuration(hireDateStr, endDateStr) {
  const hireDate = new Date(hireDateStr);
  const endDate = new Date(endDateStr);
debugger
  const timeDiff = endDate - hireDate;
  const days = timeDiff / (1000 * 3600 * 24);

  return days;
}

// Example Usage
const hireDate = '2022-01-01';
const endDate = '2022-02-01';

const employmentDays = calculateEmploymentDuration(hireDate, endDate);
console.log(`在职时间（天）：${employmentDays}`);
