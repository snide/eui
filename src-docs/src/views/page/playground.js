/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import { PropTypes } from 'react-view';
import { EuiPageHeader, EuiButton } from '../../../../src/components/';
import {
  propUtilityForPlayground,
  iconValidator,
} from '../../services/playground';

// HELP: Can we get a "simulate" toggle and pass ReactNodes?
const tabs = [
  {
    label: 'Tab 1',
    isSelected: true,
  },
  {
    label: 'Tab 2',
  },
];

const rightSideContent = [
  <EuiButton fill>Button 1</EuiButton>,
  <EuiButton>Button 2</EuiButton>,
];

export default () => {
  const docgenInfo = Array.isArray(EuiPageHeader.__docgenInfo)
    ? EuiPageHeader.__docgenInfo[0]
    : EuiPageHeader.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.iconType = iconValidator(propsToUse.iconType);

  propsToUse.pageTitle = {
    ...propsToUse.pageTitle,
    type: PropTypes.String,
    value: 'Page title',
  };

  propsToUse.leftSideContent = {
    ...propsToUse.leftSideContent,
    type: PropTypes.String,
  };

  // HELP: NOT WORKING
  propsToUse.alignItems = {
    ...propsToUse.alignItems,
    defaultValue: 'center',
  };

  propsToUse.description = {
    ...propsToUse.description,
    type: PropTypes.String,
  };

  propsToUse.rightSideContent = {
    ...propsToUse.rightSideContent,
    type: PropTypes.Array,
  };

  return {
    config: {
      componentName: 'EuiPageHeader',
      props: propsToUse,
      scope: {
        EuiPageHeader,
      },
      imports: {
        '@elastic/eui': {
          named: ['EuiPageHeader'],
        },
      },
    },
  };
};