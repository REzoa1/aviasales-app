import { FilterType, TicketType } from '../types'

type TransfersMapType = { [Transfers in string]: number }

const getNoun = (num: number, array = ['пересадка', 'пересадки', 'пересадок']) => {
  return array[num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]]
}

const getFormattedPrice = (price: number) => {
  const formattedPrice = String(price)
  const right = formattedPrice.slice(-3)
  const left = formattedPrice.slice(0, formattedPrice.length - right.length)
  return `${left} ${right} ₽`
}

const updateFilters = (filters: FilterType[], filterName: string) => {
  if (filterName === 'All') {
    const isChecked = filters.find((item) => item.id === 'All')?.checked
    const allSelected = filters.map((item) => ({ ...item, checked: !isChecked }))

    return allSelected
  }
  const currSelected = filters.map((item) =>
    item.id !== filterName && item.id !== 'All' ? item : { ...item, checked: item.id === 'All' ? false : !item.checked }
  )
  const countOfChecked = currSelected.filter(({ checked }) => checked).length

  const isAllSelected = countOfChecked === filters.length - 1
  const allSelected = currSelected.map((item) => (item.id === 'All' ? { ...item, checked: true } : item))
  const newFilters = isAllSelected ? allSelected : currSelected

  return newFilters
}

const getFilteredTickets = (tickets: TicketType[], filters: FilterType[]) => {
  const onlyChecked = filters.filter(({ checked }) => checked)
  const transfersMap = {
    zero_transefers: 0,
    one_transefer: 1,
    two_transefers: 2,
    three_transefers: 3,
  } as TransfersMapType

  const transefers = onlyChecked.map(({ id }) => id !== 'All' && transfersMap[id])
  const newTickets = tickets.filter(
    ({ segments: [from, to] }) => transefers.includes(from.stops.length) && transefers.includes(to.stops.length)
  )

  return newTickets
}

const getSortedTickets = (tickets: TicketType[], tabName: string) => {
  const currTickets = [...tickets]

  switch (tabName) {
    case 'Самый быстрый': {
      const sortedTickets = currTickets.sort((a, b) =>
        Math.sign(a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration))
      )
      return sortedTickets
    }
    case 'Самый дешевый': {
      return currTickets.sort((a, b) => a.price - b.price)
    }
    case 'Оптимальный':
    default: {
      return tickets
    }
  }
}

const getFilteredAndSortedTickets = (tickets: TicketType[], tabName: string, filters: FilterType[]) => {
  const sortedTickets = getSortedTickets(tickets, tabName)
  return getFilteredTickets(sortedTickets, filters)
}

export { getNoun, getFormattedPrice, updateFilters, getFilteredAndSortedTickets }
