import PropTypes from 'prop-types';

function Transactions({data}) {

    const elements = data.map(el => {
       return (
    <tr key={el.id}>
      <td>{el.type}</td>
      <td>{el.amount}</td>
      <td>{el.currency}</td>
    </tr>
)
   })
    return elements;
}

export default Transactions;

Transactions.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}