import { connect } from 'react-redux';

import Component from './component';

import BarChart from 'components/widget/widget-templates/populations';
import StackedBarChart from 'components/widget/widget-templates/families';
import EstimatesBarChart from 'components/widget/widget-templates/estimates';

const widgetTemplates = new Map([
  ['estimates', {
    component: EstimatesBarChart
  }],
  ['populations', {
    component: BarChart
  }],
  ['families', {
    component: StackedBarChart
  }]
]);

const mapStateToProps = state => ({
  widgets: state.analysis.widgets,
  widgetTemplates
});

export default connect(mapStateToProps)(Component);
