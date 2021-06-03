import { connect } from 'react-redux';

import Component from './component';

import BarChart from 'components/analysis/widget-templates/populations';
import StackedBarChart from 'components/analysis/widget-templates/families';
import EstimatesBarChart from 'components/analysis/widget-templates/estimates';

import { selectWidgetsProps } from 'modules/analysis/selectors';

import { setPopulations, setTrends, setTrendCategories } from 'modules/analysis/actions';

const widgetTemplates = new Map([
  [
    'families',
    {
      component: StackedBarChart,
    },
  ],
  [
    'populations',
    {
      component: BarChart,
    },
  ],
  [
    'estimates',
    {
      component: EstimatesBarChart,
    },
  ],
]);

const mapStateToProps = (state) => ({
  populationsLoaded: state.analysis.populations.loading,
  trendsLoaded: state.analysis.trends.loading,
  trend_categoriesLoaded: state.analysis.trend_categories.loading,
  widgets: state.analysis.widgets,
  widgetTemplates,
  ...selectWidgetsProps(state),
});

const mapDispatchToProps = {
  setPopulations,
  setTrends,
  setTrendCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
