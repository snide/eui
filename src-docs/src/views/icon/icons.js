// DON'T USE THIS
// DON'T USE THIS
// DON'T USE THIS
// DON'T USE THIS
// DON'T USE THIS

// This example JS is overly complex for simple icon usage
// and is set up this way for ease of use in our docs.
//
// Check the snippet tab for a more common usage.

import React from 'react';

import {
  EuiFlexGrid,
  EuiFlexItem,
  EuiIcon,
  EuiPanel,
  EuiText,
  EuiCopy,
} from '../../../../src/components';

export const iconTypes = [
  'alert',
  'apmTrace',
  'apps',
  'arrowDown',
  'arrowLeft',
  'arrowRight',
  'arrowUp',
  'asterisk',
  'beaker',
  'bell',
  'bolt',
  'boxesHorizontal',
  'boxesVertical',
  'branch',
  'broom',
  'brush',
  'bug',
  'bullseye',
  'calendar',
  'check',
  'checkInCircleFilled',
  'clock',
  'cloudDrizzle',
  'cloudStormy',
  'cloudSunny',
  'compute',
  'console',
  'controlsHorizontal',
  'controlsVertical',
  'copy',
  'copyClipboard',
  'cross',
  'crosshairs',
  'crossInACircleFilled',
  'cut',
  'database',
  'document',
  'documentEdit',
  'documents',
  'dot',
  'email',
  'empty',
  'exit',
  'expand',
  'expandMini',
  'exportAction',
  'eye',
  'eyeClosed',
  'faceHappy',
  'faceNeutral',
  'faceSad',
  'filter',
  'flag',
  'folderClosed',
  'folderOpen',
  'fullScreen',
  'gear',
  'glasses',
  'globe',
  'grab',
  'grabHorizontal',
  'grid',
  'heart',
  'heatmap',
  'help',
  'iInCircle',
  'importAction',
  'indexClose',
  'indexEdit',
  'indexFlush',
  'indexMapping',
  'indexOpen',
  'indexSettings',
  'inputOutput',
  'inspect',
  'invert',
  'ip',
  'kqlField',
  'kqlFunction',
  'kqlOperand',
  'kqlSelector',
  'kqlValue',
  'link',
  'list',
  'listAdd',
  'lock',
  'lockOpen',
  'logstashFilter',
  'logstashIf',
  'logstashInput',
  'logstashOutput',
  'logstashQueue',
  'magnifyWithMinus',
  'magnifyWithPlus',
  'magnet',
  'mapMarker',
  'memory',
  'merge',
  'menuLeft',
  'menuRight',
  'minusInCircle',
  'minusInCircleFilled',
  'moon',
  'node',
  'number',
  'offline',
  'online',
  'package',
  'partial',
  'pause',
  'pencil',
  'pin',
  'pinFilled',
  'play',
  'plusInCircle',
  'plusInCircleFilled',
  'popout',
  'questionInCircle',
  'refresh',
  'save',
  'scale',
  'search',
  'shard',
  'share',
  'snowflake',
  'sortable',
  'sortDown',
  'sortLeft',
  'sortRight',
  'sortUp',
  'starEmpty',
  'starEmptySpace',
  'starFilled',
  'starFilledSpace',
  'starMinusEmpty',
  'starMinusFilled',
  'starPlusEmpty',
  'starPlusFilled',
  'stats',
  'stop',
  'stopFilled',
  'storage',
  'string',
  'submodule',
  'symlink',
  'tableOfContents',
  'tableDensityExpanded',
  'tableDensityCompact',
  'tableDensityNormal',
  'tag',
  'tear',
  'temperature',
  'training',
  'trash',
  'user',
  'vector',
  'videoPlayer',
  'visArea',
  'visAreaStacked',
  'visBarHorizontal',
  'visBarHorizontalStacked',
  'visBarVertical',
  'visBarVerticalStacked',
  'visControls',
  'visGauge',
  'visGoal',
  'visHeatmap',
  'visLine',
  'visMapCoordinate',
  'visMapRegion',
  'visMetric',
  'visPie',
  'visTable',
  'visTagCloud',
  'visText',
  'visTimelion',
  'visVega',
  'visVisualBuilder',
  'wrench',
];

export default () => (
  <EuiFlexGrid columns={4}>
    {iconTypes.map(iconType => (
      <EuiFlexItem
        className="guideDemo__icon"
        key={iconType}
        style={{ width: '200px' }}>
        <EuiCopy textToCopy={iconType} afterMessage={`${iconType} copied`}>
          {copy => (
            <EuiPanel onClick={copy} className="eui-textCenter">
              <EuiIcon type={iconType} />
              <EuiText size="s">
                <p>{iconType}</p>
              </EuiText>
            </EuiPanel>
          )}
        </EuiCopy>
      </EuiFlexItem>
    ))}
  </EuiFlexGrid>
);
