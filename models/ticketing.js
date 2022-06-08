const mongoose = require('mongoose');
const { Schema } = mongoose;

const TicketingSchema = new Schema({
    // 회원 id
    // 좌석 id
    // 상영시간 id
});
const Ticket = mongoose.model('Ticket', TicketingSchema);
module.exports = { Ticket };
