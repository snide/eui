import React from 'react';

import { renderToHtml } from '../../services';

import {
  GuidePage,
  GuideSection,
  GuideSectionTypes,
} from '../../components';

import Discovery from './discovery';
const discoverySource = require('!!raw-loader!./discovery');
const discoveryHtml = renderToHtml(Discovery);

export default props => (
  <GuidePage title={props.route.name}>
    <GuideSection
      title={props.route.name}
      source={[{
        type: GuideSectionTypes.JS,
        code: discoverySource,
      }, {
        type: GuideSectionTypes.HTML,
        code: discoveryHtml,
      }]}
      demo={
        <Discovery />
      }
    />
  </GuidePage>
);
