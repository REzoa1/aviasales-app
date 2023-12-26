const CHECKBOXES = [
  { id: 'All', name: 'Все' },
  { id: 'zero_transefers', name: 'Без пересадок' },
  { id: 'one_transefer', name: '1 пересадка' },
  { id: 'two_transefers', name: '2 пересадки' },
  { id: 'three_transefers', name: '3 пересадки' },
]

const TABS = ['Самый дешевый', 'Самый быстрый', 'Оптимальный']

const TICKETS = [
  {
    price: 13400,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2024-06-20T05:47:32.682Z',
        duration: 746,
        stops: ['HKG'],
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2024-10-02T23:28:45.890Z',
        duration: 1376,
        stops: ['DXB', 'DEL', 'HKG'],
      },
    ],
  },
  {
    price: 13400,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2024-06-20T05:47:32.682Z',
        duration: 746,
        stops: ['HKG'],
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2024-10-02T23:28:45.890Z',
        duration: 1376,
        stops: ['DXB', 'DEL', 'HKG'],
      },
    ],
  },
  {
    price: 13400,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2024-06-20T05:47:32.682Z',
        duration: 746,
        stops: ['HKG'],
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2024-10-02T23:28:45.890Z',
        duration: 1376,
        stops: ['DXB', 'DEL', 'HKG'],
      },
    ],
  },
  {
    price: 13400,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2024-06-20T05:47:32.682Z',
        duration: 746,
        stops: ['HKG'],
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2024-10-02T23:28:45.890Z',
        duration: 1376,
        stops: ['DXB', 'DEL', 'HKG'],
      },
    ],
  },
  {
    price: 13400,
    carrier: 'S7',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2024-06-20T05:47:32.682Z',
        duration: 746,
        stops: ['HKG'],
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2024-10-02T23:28:45.890Z',
        duration: 1376,
        stops: ['DXB', 'DEL', 'HKG'],
      },
    ],
  },
]

export { CHECKBOXES, TABS, TICKETS }
