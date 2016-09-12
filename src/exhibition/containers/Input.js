import React from 'react';

import PureInput from 'components/PureInput';

export default () => (
  <div>
    <article>
      <section>
        <h3>Pure Input</h3>
        <div style={{ width: '20em', padding: '1em', background: 'rgba(90, 90, 90, .2)' }}>
          {[12, 14, 16, 18, 20].map(size =>
            <div key={size} style={{ fontSize: size, background: 'rgba(90, 90, 90, .2)' }}>
              <PureInput placeholder={`font-size: 1em = ${size}px`} />
            </div>
          )}
        </div>
      </section>
      <section>
        <h3>Pure Input</h3>
        <div style={{ width: '20em', padding: '1em', background: 'rgba(90, 90, 90, .2)' }}>
          {[12, 14, 16, 18, 20].map(size =>
            <div key={size} style={{ fontSize: size, background: 'rgba(90, 90, 90, .2)' }}>
              <PureInput placeholder={`font-size: 1em = ${size}px`} />
            </div>
          )}
        </div>
      </section>
    </article>
  </div>
);
