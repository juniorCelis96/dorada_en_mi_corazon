import { getUpcomingEvents } from '@/data/cultureData'
import { CultureSection } from './CultureSection'

export function EventsCalendar () {
  const upcomingEvents = getUpcomingEvents()

  return (
    <section className='py-12'>
      <div className='container mx-auto px-4'>
        <div className='mb-8 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-gray-900'>Próximos Eventos</h2>
          <p className='text-lg text-gray-600'>
            Descubre los eventos culturales y festividades que se aproximan
          </p>
        </div>
        <CultureSection items={upcomingEvents} />
      </div>
    </section>
  )
}
