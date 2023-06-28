function canAttendAllMeetings(intervals) {
    // Sort the intervals based on their start times
    intervals.sort((a, b) => a[0] - b[0]);
  
    // Check if there is any overlap between consecutive intervals
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < intervals[i - 1][1]) {
        return false; // Overlap found, cannot attend all meetings
      }
    }
  
    return true; // No overlap found, can attend all meetings
  }
  
  // Test the function
  const intervals = [[0,30],[5,10],[15,20]];
  const canAttend = canAttendAllMeetings(intervals);
  console.log(canAttend); // Output: false
  