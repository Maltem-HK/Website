import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import SlideComponent from './Common/Slide/Slide';
import WelcomeComponent from './Welcome/Welcome';
import GeneralInformationComponent from './GeneralInformation/GeneralInformation';
import Team from './Team/Team';
import KeyFigures from './KeyFigures/KeyFigures';
import AboutUs from './AboutUs/AboutUs';
import Conditional from './Common/Conditional/Conditional';
import { agglomerateFetchData } from '../actions/agglomerate';
import isEmpty from '../utils/object';

configureAnchors({ scrollDuration: 500, offset: -30 });

export class App extends Component {
  componentDidMount() {
    const { agglomerateFetch } = this.props;
    agglomerateFetch();
  }

  loadSuccess(dataKey) {
    const {
      agglomerate,
      agglomerate: {
        isLoading,
        hasErrored,
      },
    } = this.props;
    return !isLoading && !hasErrored && !isEmpty(agglomerate[dataKey]);
  }

  render() {
    const {
      agglomerate: {
        welcomewords,
        socialnetworks,
        groupdescription,
        team,
        keyfigures,
        about,
      },
    } = this.props;

    return (
      <div id="app-content">
        <ScrollableAnchor id="welcome">
          <div>
            <SlideComponent className="slide-welcome">
              <WelcomeComponent
                welcomeWords={welcomewords}
                socialNetworks={socialnetworks}
              />
            </SlideComponent>
          </div>
        </ScrollableAnchor>
        <Conditional test={this.loadSuccess('generalinformation')}>
          <ScrollableAnchor id="general-information">
            <div>
              <SlideComponent className="slide-general-information">
                <GeneralInformationComponent
                  groupdescription={groupdescription}
                />
              </SlideComponent>
            </div>
          </ScrollableAnchor>
        </Conditional>
        <Conditional test={this.loadSuccess('team')}>
          <ScrollableAnchor id="our-team">
            <div>
              <SlideComponent className="slide-team">
                <Team
                  team={team}
                />
              </SlideComponent>
            </div>
          </ScrollableAnchor>
        </Conditional>
        <Conditional test={this.loadSuccess('keyfigures')}>
          <ScrollableAnchor id="key-facts">
            <div>
              <SlideComponent className="slide-key-figures">
                <KeyFigures
                  keyFigures={keyfigures}
                />
              </SlideComponent>
            </div>
          </ScrollableAnchor>
        </Conditional>
        <Conditional test={this.loadSuccess('about')}>
          <ScrollableAnchor id="about-us">
            <div>
              <SlideComponent className="slide-about-us">
                <AboutUs
                  about={about}
                />
              </SlideComponent>
            </div>
          </ScrollableAnchor>
        </Conditional>
      </div>
    );
  }
}

App.propTypes = {
  agglomerateFetch: PropTypes.func.isRequired,
  agglomerate: PropTypes.objectOf(Object).isRequired,
};

export const mapStateToProps = ({ agglomerate }) => ({
  agglomerate,
});

export const mapDispatchToProps = dispatch => ({
  agglomerateFetch: () => dispatch(agglomerateFetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
