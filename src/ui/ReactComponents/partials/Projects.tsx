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
            src="/images/devstagram.png"
          />
        }
        actions={[
          <a target='_blank' className='hover:bg-slate-200 transition-all duration-300' href="https://github.com/jhondev1997/devstagram" >
            <img className='m-auto w-5' src="/svgs/tech/github.png" alt="github" />
          </a>,
        ]}
      >
        <Meta
          title="Clon sencillo de instagram"
          description="Hecho con Laravel, Tailwind y MySQL"
        />
      </Card>
      <Card
        hoverable
        style={{ width: 300, cursor: 'default' }}
        cover={
          <img
            alt="example"
            src="/images/chrismas-page.png"
          />
        }
        actions={[
          <a target='_blank' className='hover:bg-slate-200 transition-all duration-300' href="https://github.com/jhondev1997/chrismas-page-navidad" >
            <img className='m-auto w-5' src="/svgs/tech/github.png" alt="github" />
          </a>,
          <a target='_blank' href="https://superlative-crostata-7437fe.netlify.app/" >📈</a>,
        ]}
      >
        <Meta
          title="Maquetado navideño"
          description="Hecho con Html, Sass, y Javascript; diseño base de la comunidad de Figma"
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
          <a target='_blank' className='hover:bg-slate-200 transition-all duration-300' href="https://github.com/jhondev1997/node-backend-music-simple/tree/main" >
            <img className='m-auto w-5' src="/svgs/tech/github.png" alt="github" />
          </a>,
          
        ]}
      >
        <Meta
          title="Backend para gestionar música"
          description="Trabajado con NodeJS, Express, MongoDB y MySQL"
        />
      </Card>
      <Card
        hoverable
        style={{ width: 300, cursor: 'default' }}
        cover={
          <img
            alt="example"
            src="/images/calculadora-proyecto.png"
          />
        }
        actions={[
          <a target='_blank' className='hover:bg-slate-100 transition-all duration-300' href="https://github.com/jhondev1997/Calculadora-calculator" >
            <img className='m-auto w-5' src="/svgs/tech/github.png" alt="github" />
          </a>,
          <a target='_blank' className='hover:bg-slate-100 transition-all duration-300' href="https://dreamy-faloodeh-f6897e.netlify.app/" >📈</a>,
        ]}
      >
        <Meta
          title="Calculadora simple"
          description="Hecho con html, css y javascript"
        />
      </Card>
    </div>
  )
}
