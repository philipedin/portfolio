import * as React from 'react';
import PageLayout from '../layouts/page';
import GhostTyper from '../components/GhostTyper';

const IndexPage = () => (
  <PageLayout>
    <h1>Philip Edin</h1>
    <GhostTyper text="I'm a Web Developer with passion for front-end." />
  </PageLayout>
);

export default IndexPage;
