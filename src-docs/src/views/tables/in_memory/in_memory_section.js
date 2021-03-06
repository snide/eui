import React from 'react';
import { GuideSectionTypes } from '../../../components';
import { renderToHtml } from '../../../services';

import { Table } from './in_memory';
import { propsInfo } from './props_info';

const source = require('!!raw-loader!./in_memory');
const html = renderToHtml(Table);

export const section = {
  source: [
    {
      type: GuideSectionTypes.JS,
      code: source,
    },
    {
      type: GuideSectionTypes.HTML,
      code: html,
    },
  ],
  text: (
    <div>
      <p>
        The <strong>EuiInMemoryTable</strong> is a higher level component
        wrapper around <strong>EuiBasicTable</strong> that aimed at displaying
        tables data when all the data is in memory. It takes the full set of
        data (all possible items) and based on its configuration, will display
        it handling all configured functionality (pagination and sorting) for
        you.
      </p>
    </div>
  ),
  props: propsInfo,
  demo: <Table />,
};
