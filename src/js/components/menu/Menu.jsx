import React from 'react';
import { useHistory } from 'react-router-dom';


const Menu = () => {
  const history = useHistory();
  return (
    <section>
      <h2>Hi everyone, it&apos;s my first app after studying of RSSchool</h2>
      <button onClick={() => { history.push('/login') }}>Next</button>
    </section>
  )
}
export default Menu;