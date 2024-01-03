import { Timeline } from 'antd'

export const HistorialEstudy = () => {
  return (
    <article className='h-full grid gap-4'>
      <h2 className='text-black font-semibold font-mono'>Estudios</h2>
      <Timeline
        mode='left'
        items={[
          {
            label: '2016 - 2021',
            children: 'Estudios Universitarios - UNPRG',
          },
          {
            label: '2013',
            children: 'Estudios Secundarios - San Francisco de Asís',
          },
          
        ]}
      />
    </article>
  )
}
