import { connect } from 'react-redux';

import Component from './component';

import BarChart from 'components/analysis/widget-templates/populations';
import StackedBarChart from 'components/analysis/widget-templates/families';
import EstimatesBarChart from 'components/analysis/widget-templates/estimates';

import { setPopulations } from 'modules/population/actions';
import { setTrends, setTrendCategories } from 'modules/analysis/actions';

const widgetTemplates = new Map([
  ['families', {
    component: StackedBarChart
  }],
  ['populations', {
    component: BarChart
  }],
  ['estimates', {
    component: EstimatesBarChart
  }]
]);

const mapStateToProps = state => ({
  widgets: state.analysis.widgets,
  widgetTemplates
});

const mapDispatchToProps = {
  setPopulations,
  setTrends,
  setTrendCategories
};

export default connect(mapStateToProps,mapDispatchToProps)(Component);
