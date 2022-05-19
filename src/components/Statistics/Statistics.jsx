import StatItem from './StatItem';
import PropTypes from 'prop-types';
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
  stats: PropTypes.array.isRequired,
}
