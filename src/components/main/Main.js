import React from 'react';
import cssModules from 'react-css-modules';
import style from './styles.styl';

const Main = (props) => (
  <div>
    <section>
      <div styleName="container">
        {props.children}
      </div>
    </section>
  </div>
);

Main.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default cssModules(Main, style);
