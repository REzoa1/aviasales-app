import { API_BASE } from './constants'

const fetchData = async (url: string) => {
  try {
    const res = await fetch(url)

    if (res.ok) {
      const data = await res.json()
      return data
    }

    if (res.status) {
      return new Error('Ошибка получения данных', { cause: res.status })
    }
    throw new Error('Ошибка получения данных')
  } catch (err) {
    const knownErr = err as Error
    if (knownErr.cause) {
      return new Error('Ошибка получения данных (API хост некорректен)')
    }
    throw new Error('Ошибка получения данных (API хост некорректен)')
  }
}

const fetchSearchId = async () => {
  const url = `${API_BASE}/search`
  const res = await fetchData(url)

  return res.searchId
}

const fetchTickets = async (searchId: string) => {
  const url = `${API_BASE}/tickets?searchId=${searchId}`
  const res = await fetchData(url)

  return res
}

export { fetchSearchId, fetchTickets }
