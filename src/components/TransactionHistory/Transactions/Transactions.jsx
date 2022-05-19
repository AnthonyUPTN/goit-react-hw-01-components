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