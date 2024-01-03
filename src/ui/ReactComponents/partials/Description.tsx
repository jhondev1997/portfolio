import { Descriptions, type DescriptionsProps } from 'antd';
const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Nombre 😁',
    children: 'Jhon Cruz Porras',
  },
  {
    key: '2',
    label: 'Telefono 📱',
    children: '931283810',
  },
  {
    key: '3',
    label: 'Vivo en 🗺️',
    children: 'Perú, Lima',
  }
];

export const Description = () => {
  return (
    <>
      <Descriptions id='description'  title="Información sencilla" items={items} layout="horizontal" column={2} labelStyle={{ color: '#283acd', fontWeight: 600 }} contentStyle={{color: '#000'}} style={{ color: '#283acd' }} className='text-blue-700'/>

      <style>{`
        #description .ant-descriptions-header{
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }
      `}</style>
    </>
  )
}
