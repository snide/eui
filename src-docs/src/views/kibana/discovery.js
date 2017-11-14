import React, {
  Component,
} from 'react';

import {
  EuiKeyboardAccessible,
  EuiButton,
  EuiCode,
  EuiButtonEmpty,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageSideBar,
  EuiPopover,
  EuiSideNav,
  EuiSideNavItem,
  EuiSideNavTitle,
  EuiSpacer,
  EuiText,
  EuiIcon,
  EuiTitle,
  EuiPanel,
  EuiDescriptionList,
  EuiHorizontalRule,
} from '../../../../src/components';

import {
  KibanaChrome,
  Query,
} from '../partials';

const favoriteVideoGames = [
  {
    title: 'title',
    description: 'Response Time',
  },
  {
    title: 'description',
    description: '',
  },
  {
    title: 'hits',
    description: 0,
  },
  {
    title: 'columns',
    description: 'responsetime',
  },
  {
    title: 'sort',
    description: '@timestamp, desc',
  },
  {
    title: 'version',
    description: 1,
  },
  {
    title: '_id',
    description: '82f04d00-673a-11e7-bf47-3b5beb89769c',
  },
  {
    title: '_type',
    description: 'search',
  },
  {
    title: '_index',
    description: '.kibana',
  },
  {
    title: 'score',
    description: 1,
  },
  {
    title: 'kibanaSavedObjectMeta.searchSourceJSON:',
    description: <EuiCode language="json" transparentBackground fontSize="m">{`"index":"packetbeat-*","highlightAll":true,"version":true,"query":{"query_string":{"analyze_wildcard":true,"query":"*"}},"filter":[]}`}</EuiCode>
  },
];

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false,
    };
  }

  onButtonClick = () => {
    this.setState(prevState => ({
      isPopoverOpen: !prevState.isPopoverOpen,
    }));
  };

  closePopover = () => {
    this.setState({
      isPopoverOpen: false,
    });
  };

  renderResults() {
    let results = []

    for (let i = 0; i < 20; i++){
      results.push(
        <EuiKeyboardAccessible key={i}>
          <div className="discoverRow">
            <EuiFlexGroup gutterSize="s" alignItems="center">
              <EuiFlexItem>
                <EuiDescriptionList
                  type="inline"
                  listItems={favoriteVideoGames}
                />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <div className="discoverRow__next">
                  <EuiIcon type="arrowRight" />
                </div>
              </EuiFlexItem>
            </EuiFlexGroup>
          </div>
        </EuiKeyboardAccessible>
      )
    }

    return results
  }

  renderPage() {
    return (
      <EuiPage>
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>Some ridiculously long saved search name</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
          <EuiPageHeaderSection>
            <EuiButton size="s" iconType="copy">
              Reports & sharing
            </EuiButton>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageHeader>
          <Query />
        </EuiPageHeader>
        <EuiPageBody>
          <EuiPageSideBar>
            <EuiSideNav
              mobileTitle="Navigate within $APP_NAME"
              toggleOpenOnMobile={this.toggleOpenOnMobile}
              isOpenOnMobile={this.state.isSideNavOpenOnMobile}
              style={{ width: 192 }}
            >

              <EuiSideNavTitle>
                Selected fields
              </EuiSideNavTitle>
              <EuiSideNavItem>
                <button>
                  <EuiIcon type="number" color="subdued" /> response
                </button>
              </EuiSideNavItem>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="string" color="subdued" /> @tags
                </button>
              </EuiSideNavItem>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="clock" color="subdued" /> timestamp
                </button>
              </EuiSideNavItem>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="number" color="subdued" /> ip address
                </button>
              </EuiSideNavItem>

              <EuiSideNavTitle>
                Available Fields
              </EuiSideNavTitle>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="string" color="subdued" /> @message
                </button>
              </EuiSideNavItem>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="string" color="subdued" /> @tags
                </button>
              </EuiSideNavItem>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="string" color="subdued" /> @timestamp
                </button>
              </EuiSideNavItem>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="string" color="subdued" /> _id
                </button>
              </EuiSideNavItem>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="string" color="subdued" /> _score
                </button>
              </EuiSideNavItem>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="string" color="subdued" /> extension
                </button>
              </EuiSideNavItem>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="string" color="subdued" /> geo.coordinates
                </button>
              </EuiSideNavItem>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="string" color="subdued" /> geo.dest
                </button>
              </EuiSideNavItem>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="string" color="subdued" /> geo.src
                </button>
              </EuiSideNavItem>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="string" color="subdued" /> geo.srcdest
                </button>
              </EuiSideNavItem>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="string" color="subdued" /> headings
                </button>
              </EuiSideNavItem>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="string" color="subdued" /> host
                </button>
              </EuiSideNavItem>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="string" color="subdued" /> index
                </button>
              </EuiSideNavItem>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="string" color="subdued" /> links
                </button>
              </EuiSideNavItem>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="string" color="subdued" /> machine.os
                </button>
              </EuiSideNavItem>

              <EuiSideNavItem>
                <button>
                  <EuiIcon type="string" color="subdued" /> machine.ram
                </button>
              </EuiSideNavItem>

            </EuiSideNav>
          </EuiPageSideBar>

          <EuiPageContent>
            <EuiPageContentHeader>
              <EuiPageContentHeaderSection>
                <EuiText>
                  <h2>1234 results</h2>
                </EuiText>
              </EuiPageContentHeaderSection>

              <EuiPageContentHeaderSection>
                <EuiFlexGroup gutterSize="m">
                  <EuiFlexItem>
                    <EuiButtonEmpty iconType="gear" size="xs">Format display</EuiButtonEmpty>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiPageContentHeaderSection>
            </EuiPageContentHeader>

            <EuiPageContentBody>

              {this.renderResults()}

            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    );
  }

  render() {
    return (
      <KibanaChrome>
        {this.renderPage()}
      </KibanaChrome>
    );
  }
}
