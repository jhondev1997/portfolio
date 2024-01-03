import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import type React from 'react';
const { Meta } = Card;

export const Projects: React.FC = () => {
  return (
    <div className='flex gap-6 flex-wrap items-center md:justify-normal justify-center'>
      <Card
        hoverable
        style={{ width: 300, cursor: 'default' }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <a href="#" >📈</a>,
          <a href="#" >📈</a>,
          <a href="#" >📈</a>,
        ]}
      >
        <Meta
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card
        hoverable
        style={{ width: 300, cursor: 'default' }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <a href="#" >📈</a>,
          <a href="#" >📈</a>,
          <a href="#" >📈</a>,
        ]}
      >
        <Meta
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card
        hoverable
        style={{ width: 300, cursor: 'default' }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <a href="#" >📈</a>,
          <a href="#" >📈</a>,
          <a href="#" >📈</a>,
        ]}
      >
        <Meta
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card
        hoverable
        style={{ width: 300, cursor: 'default' }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <a href="#" >📈</a>,
          <a href="#" >📈</a>,
          <a href="#" >📈</a>,
        ]}
      >
        <Meta
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card
        hoverable
        style={{ width: 300, cursor: 'default' }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <a href="#" >📈</a>,
          <a href="#" >📈</a>,
          <a href="#" >📈</a>,
        ]}
      >
        <Meta
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
  )
}
