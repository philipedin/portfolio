import * as React from 'react';
import GhostTyper from '../components/GhostTyper';

const IndexPage = () => (
  <div>
    <h1>Contact</h1>
    <p>
      <GhostTyper text="Interested in contacting me or to know more of me and what i do?" />
    </p>
    <p>
      Github: <a target="_blank" href="https://www.github.com/philipedin">github.com/philipedin</a>
    </p>
    <p>
      LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/philip-edin-b4ab13133">linkedin.com/in/philip-edin-b4ab13133</a>
    </p>
    <p>
      Email: <a target="_blank" href="mailto:philip.edin.alt@gmail.com">philip.edin.alt@gmail.com</a>
    </p>
  </div>
);

export default IndexPage;
