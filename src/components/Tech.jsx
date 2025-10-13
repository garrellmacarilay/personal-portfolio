import React from 'react';

function Tech() {
  return (
    <section id="stats" className="stats section">
      <h2>Tech Stack</h2>
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center">
              <img src="https://skillicons.dev/icons?i=laravel,py,js,java,cpp&perline=1" />
              <span
                data-purecounter-start={0}
                data-purecounter-end={232}
                data-purecounter-duration={1}
                className="purecounter"
              />
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center">
              <img src="https://skillicons.dev/icons?i=react,laravel,tailwind,bootstrap,shadcnui&perline=1" />
              <span
                data-purecounter-start={0}
                data-purecounter-end={521}
                data-purecounter-duration={1}
                className="purecounter"
              />
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center">
              <img src="https://skillicons.dev/icons?i=nodejs,express,mysql,sqlite,postgres&perline=1" />
              <span
                data-purecounter-start={0}
                data-purecounter-end={1453}
                data-purecounter-duration={1}
                className="purecounter"
              />
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center">
              <img src="https://skillicons.dev/icons?i=vercel,supabase,docker,git,postman&perline=1" />
              <span
                data-purecounter-start={0}
                data-purecounter-end={32}
                data-purecounter-duration={1}
                className="purecounter"
              />
            </div>
          </div>
          {/* End Stats Item */}
        </div>
      </div>
    </section>
  );
}

export default Tech;