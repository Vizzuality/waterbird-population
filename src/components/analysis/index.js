import { connect } from 'react-redux';

import Component from './component';

import BarChart from 'components/widget/widget-templates/populations';
import StackedBarChart from 'components/widget/widget-templates/families';
import EstimatesBarChart from 'components/widget/widget-templates/estimates';

import { setPopulations } from 'modules/population/actions';
import { setTrends } from 'modules/analysis/actions';

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

const mapDispatchToProps = { setPopulations, setTrends };

export default connect(mapStateToProps,mapDispatchToProps)(Component);
