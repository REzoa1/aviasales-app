import React from 'react'
import { addMinutes, format } from 'date-fns'

import { SegmentType } from '../../../types'
import { getNoun } from '../../../utils/helpers'
import Inner from '../Inner/Inner'
import s from '../Ticket.module.scss'

function Segment({ origin, destination, date, duration, stops }: SegmentType) {
  const sampleDate = new Date(date)
  const start = format(sampleDate, 'HH:mm')
  const end = format(addMinutes(sampleDate, duration), 'HH:mm')
  const time = format(new Date(0, 0, 0, 0, duration), 'HHч mmм')
  const stopsCount = stops.length ? `${stops.length} ${getNoun(stops.length)}` : 'нет пересадок'

  const columns = [
    { id: 'path', title: `${origin} - ${destination}`, subtitle: `${start} - ${end}` },
    { id: 'time', title: 'В пути', subtitle: time },
    { id: 'stops', title: stopsCount, subtitle: stops.join(', ') },
  ]

  return (
    <div className={s.ticket__wrap}>
      {columns.map(({ id, title, subtitle }) => (
        <Inner key={id} title={title} subtitle={subtitle} />
      ))}
    </div>
  )
}

export default Segment
