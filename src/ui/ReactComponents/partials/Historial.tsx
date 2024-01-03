import { Timeline } from "antd"

export const Historial = () => {
  return (
    <>

      <h2 className="font-semibold text-lg uppercase text-blue-800 font-mono ">Experiencia</h2>

      <Timeline
        style={{ width: '100%', maxWidth: '600px', margin: 'auto',  padding: '16px 16px 0 16px' }}
        items={[
          {
            color: 'green',
            children: (
              <>
                <h3 className="text-blue-c-01_700 font-semibold">2022-2023 : Desarrollador Web en el Instituto Médico de la Mujer</h3>
                <p><span>✅</span> Desarrollo rápido de encuestas con <span className="font-semibold">Astro, React y Laravel en backend</span></p>
                <p><span>✅</span> Maquetado adaptable de landings informativas médicas con <span className="font-semibold">Html, Sass y Javascript</span></p>
                <p><span>✅</span> Mantenimiento de sus páginas principales hechas en <span className="font-semibold">Laravel</span></p>
                <p><span>✅</span> Planeación en ciertas aplicaciones que solucionen problemas hechas con <span className="font-semibold">React, Inertia y Laravel</span></p>
                <p><span>✅</span> Migración en ciertas aplicaciones hechas con versiones en algunos frameworks deprecados a <span className="font-semibold">React, Astro y Laravel</span></p>
              </>
            ),
          },
          {
            color: 'green',
            children: (
              <>
                <h3 className="text-blue-c-01_700 font-semibold">2021 : Moderador (prácticas) y desarrollador FrontEnd (prácticas) en BlackBoard Collaborate</h3>
                <p><span>✅</span> Durante los 3 primeros meses, como moderador de sus aulas virtuales</p>
                <p><span>✅</span> Los siguientes 3 meses como programador FrontEnd</p>
              </>
            ),
          }
        ]}
      />
    </>
  )
}
