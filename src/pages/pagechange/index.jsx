import React, { useState } from 'react';
import './pagechange.scss';
import { Switch } from 'antd';

function PageChangeOnScroll() {
  const [includeInfo, setIncludeInfo] = useState(false);
  const onChange = (checked) => {
    setIncludeInfo(checked);
  };
  return (
    <div className='page_scroll_container'>
      <section className='section-background parallax'>
        <div className='infomation-container'>
          <p>Include Information</p>
          <Switch
            onChange={onChange}
            checked={includeInfo}
          />
        </div>
        <h2>Desert</h2>
      </section>
      <section className='text-block'>
        {includeInfo && (
          <>
            {' '}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis
              quibusdam, ex totam aliquam provident alias culpa, sit illo, eum
              doloribus doloremque. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Excepturi reprehenderit voluptatum aperiam
              pariatur numquam praesentium recusandae, ipsa at iusto eveniet,
              distinctio sunt dolore nemo veniam maiores vitae deserunt cum
              ducimus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis
              quibusdam, ex totam aliquam provident alias culpa, sit illo, eum
              doloribus doloremque. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Excepturi reprehenderit voluptatum aperiam
              pariatur numquam praesentium recusandae, ipsa at iusto eveniet,
              distinctio sunt dolore nemo veniam maiores vitae deserunt cum
              ducimus.
            </p>
          </>
        )}
      </section>
      <section className='section-background parallax1'>
        <h2>Mountain</h2>
      </section>

      <section className='text-block'>
        {includeInfo && (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            excepturi ratione, corrupti ipsum quas delectus quaerat ea nesciunt
            molestias nostrum suscipit iste accusantium totam? Vitae repellendus
            ea dolorum sequi inventore enim repudiandae dignissimos nemo vel
            dicta voluptatum ex, porro natus quos ipsa tempora placeat odio
            autem corporis earum repellat dolore similique omnis. Reiciendis
            eveniet repellendus laboriosam sapiente. Dolor aliquid, in suscipit
            consectetur aliquam, ea adipisci veniam recusandae expedita
            perspiciatis consequatur delectus pariatur quaerat temporibus iste
            dicta quod nam eum alias repellat aperiam. Voluptate rerum quibusdam
            nam sapiente debitis necessitatibus veniam nesciunt ipsa aliquid
            facilis laudantium natus quaerat facere qui earum reprehenderit
            minima, consectetur quia voluptatibus? Rerum in sint ex, officia,
            officiis esse praesentium, odit corrupti porro omnis hic voluptas
            nostrum assumenda veritatis fugiat fugit et alias tempora. Neque
            expedita quis velit sapiente, itaque quas modi asperiores iste alias
            veritatis quibusdam distinctio et, id repellat suscipit rerum
            praesentium ut fugiat, voluptate excepturi facilis enim. Inventore
            error, cumque nisi porro ut libero dolorum officiis veniam
            distinctio non beatae a perferendis cupiditate aperiam harum vitae
            eligendi voluptas sed, excepturi tempora. Labore blanditiis dolor
            totam ullam possimus maiores voluptate consequuntur consequatur
            omnis et laboriosam minima assumenda nesciunt, a quod corporis
            nobis. Tempora recusandae fugiat optio voluptatem doloribus! Non
            distinctio corrupti repellendus sequi minima velit temporibus
            praesentium aliquam cum quasi in saepe accusamus omnis facere
            commodi, facilis, nihil assumenda nam quo quas? Quidem odit numquam
            sapiente temporibus voluptas magnam unde impedit assumenda animi,
            aspernatur nisi dicta, magni cumque eum facilis. Facere, aliquid
            quas? Vel, ipsum.
          </p>
        )}
      </section>

      <section className='section-background parallax2'>
        <h2>Sea</h2>
      </section>
      <section className='text-block'>
        {includeInfo && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, sed?
            Ab, quibusdam. Aliquam iusto hic nulla quisquam inventore quo modi
            cupiditate minima odio eum! Totam perferendis eum non enim accusamus
            temporibus assumenda cupiditate inventore adipisci dolorem. Ducimus
            temporibus officiis corporis excepturi harum soluta, perspiciatis
            obcaecati doloribus voluptatum, iste illo tempora. Eos quis quae
            commodi unde sequi! Eius eligendi facere aut similique. Temporibus
            exercitationem minus reiciendis nobis. Sit, enim ex. Vel sapiente ad
            reprehenderit modi rem doloremque illum dignissimos necessitatibus,
            doloribus commodi mollitia ut consectetur amet. Accusamus,
            consequatur suscipit sit quas ab magni est dolorum sunt quo iure
            tenetur facere temporibus!
          </p>
        )}
      </section>
      <section className='section-background parallax3'>
        <h2>Galaxy</h2>
      </section>
      <section className='text-block'>
        {includeInfo && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, sed?
            Ab, quibusdam. Aliquam iusto hic nulla quisquam inventore quo modi
            cupiditate minima odio eum! Totam perferendis eum non enim accusamus
            temporibus assumenda cupiditate inventore adipisci dolorem. Ducimus
            temporibus officiis corporis excepturi harum soluta, perspiciatis
            obcaecati doloribus voluptatum, iste illo tempora. Eos quis quae
            commodi unde sequi! Eius eligendi facere aut similique. Temporibus
            exercitationem minus reiciendis nobis. Sit, enim ex. Vel sapiente ad
            reprehenderit modi rem doloremque illum dignissimos necessitatibus,
            doloribus commodi mollitia ut consectetur amet. Accusamus,
            consequatur suscipit sit quas ab magni est dolorum sunt quo iure
            tenetur facere temporibus!
          </p>
        )}
      </section>
    </div>
  );
}

export default PageChangeOnScroll;
