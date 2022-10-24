const filterTicketByTransfer = (tickets, filters) => {
  const preferredStopsCounts = filters.filter((filter) => filter.isChecked).map((filter) => filter.stopCount)
  return tickets.filter((ticket) =>
    ticket.segments.every((segment) => {
      const stopCount = segment.stops.length
      return preferredStopsCounts.includes(stopCount)
    })
  )
}
export default filterTicketByTransfer
