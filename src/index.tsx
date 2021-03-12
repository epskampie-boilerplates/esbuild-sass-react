console.log('hello, world!');

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export class AppView extends React.Component<{ name: string }> {
  render() {
    const { name } = this.props;
    return <div className="">Hello {name}!</div>;
  }
}

ReactDOM.render(
  <AppView name="World" />,
  document.getElementById('react-root')
);
