import React from 'react';

import { Skills, TableSkills, TecSkills } from './styled';

export default function Habilidades() {
  return (
    <Skills id="skills">
      <TableSkills>
        <TecSkills src="./page-skills/img-js.png" />

        <TecSkills src="./page-skills/img-html.png" />

        <TecSkills src="./page-skills/img-css.png" />

        <TecSkills src="./page-skills/img-git.png" />

        <TecSkills src="./page-skills/img-ts.png" />

        <TecSkills src="./page-skills/img-github.png" />

        <TecSkills src="./page-skills/img-mongodb.png" />

        <TecSkills src="./page-skills/img-mysql.png" />
        <TecSkills src="./page-skills/img-node.png" />

        <TecSkills src="./page-skills/img-react.png" />
      </TableSkills>
    </Skills>
  );
}
