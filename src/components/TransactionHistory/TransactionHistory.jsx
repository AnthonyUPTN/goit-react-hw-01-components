import PropTypes from 'prop-types';
import Transactions from './Transactions'
import s from './transactionHistory.module.css'

function TransactionHistory({items}) {
    return (
        <table className={s.transaction}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
          <Transactions data={items}/>
  </tbody>
</table>
    )
}

export default TransactionHistory;

TransactionHistory.defaultProps = {
    items: [],
}

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}