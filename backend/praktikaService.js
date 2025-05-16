// Simulate integration with Praktika
const appointments = [];

module.exports = {
  getAvailableSlots: () => {
    return [
      { date: '2025-05-20', time: '10:00 AM' },
      { date: '2025-05-20', time: '11:00 AM' }
    ];
  },

  bookAppointment: (date, time, name) => {
    appointments.push({ date, time, name });
    return { success: true, message: `Appointment booked for ${name} at ${time} on ${date}` };
  }
};
