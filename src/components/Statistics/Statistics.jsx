import PropTypes from 'prop-types';
import StatItem from './StatItem';
import s from './statistics.module.css';

function Statistics({ stats, title }) {
  return (
    <section className={s.statistics}>
          {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
              <StatItem data={stats}/>
      </ul>
    </section>
  );
}

export default Statistics;

Statistics.defaultProps = {
    stats: [],
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
 }))
}