import { Order } from '@/shared/type'
import wade from '@/assets/people/wade.png'
import jane from '@/assets/people/jane.png'
import guy from '@/assets/people/guy.png'
import kristin from '@/assets/people/kristin.png'

const Orders = () => {
    const orders: Array<Order> = [
        {
            profileUrl : wade,
            name: 'Wade Warren',
            orderNo: 15478256,
            amount: 124.00,
            status: 'Delivered'
        },
        {
            profileUrl : jane,
            name: 'Jane Cooper',
            orderNo: 15478256,
            amount: 365.02,
            status: 'Delivered'
        },
        {
            profileUrl : guy,
            name: 'Guy Hawkins',
            orderNo: 15478256,
            amount: 124.00,
            status: 'Cancelled'
        },
        {
            profileUrl : kristin,
            name: 'Kristin Watson',
            orderNo: 15478256,
            amount: 124.00,
            status: 'Delivered'
        },
        {
            profileUrl : wade,
            name: 'Wade Warren',
            orderNo: 15478256,
            amount: 124.00,
            status: 'Pending'
        },
        {
            profileUrl : jane,
            name: 'Jane Cooper',
            orderNo: 15478256,
            amount: 365.02,
            status: 'Delivered'
        },
    ]


  return (
    <div id='orders'>
        <h2 className='heading'>Recent Orders</h2>
        <table className='orders-table'>
            <thead className='header'>
                <th>Customer</th>
                <th>Order No.</th>
                <th>Amount</th>
                <th>Status</th>
            </thead>

            <tbody>
                {orders.map((order, index) => (
                    <tr key={index}>
                        <td className='customer'>
                            <img className='customer-image' src={order.profileUrl}/>
                            <span>{order.name}</span>
                        </td>
                        <td>{order.orderNo}</td>
                        <td>${order.amount}</td>
                        <td>
                            <span className={`status ${order.status}`}>
                            {order.status}
                            </span>
                        </td>
                    </tr>
                ))}
               
            </tbody>
        </table>
    </div>
  )
}

export default Orders