const getTotalFlyDuration = (ticket) => ticket.segments.map((el) => el.duration).reduce((prev, curr) => prev + curr, 0)

export default getTotalFlyDuration
