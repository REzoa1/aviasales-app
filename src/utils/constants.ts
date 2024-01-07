const API_BASE = 'https://aviasales-test-api.kata.academy'

const FILTERS_INITIAL = [
  { id: 'All', name: 'Все', checked: true },
  { id: 'zero_transefers', name: 'Без пересадок', checked: true },
  { id: 'one_transefer', name: '1 пересадка', checked: true },
  { id: 'two_transefers', name: '2 пересадки', checked: true },
  { id: 'three_transefers', name: '3 пересадки', checked: true },
]

const TABS = ['Самый дешевый', 'Самый быстрый', 'Оптимальный']

export { API_BASE, FILTERS_INITIAL, TABS }
