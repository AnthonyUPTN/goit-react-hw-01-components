import PropTypes from 'prop-types';
import s from './statItem.module.css'

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

function StatItem({data}) {
    const elements = data.map(el => (<li className={s.item} key={el.id} style={{backgroundColor: generateColor()}}>
      <span className={s.label}>{el.label}</span>
      <span className={s.percentage}>{el.percentage}%</span>
    </li>))
    return elements;
}

export default StatItem;

StatItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
   label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
 }))
}

