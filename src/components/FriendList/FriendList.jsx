import PropTypes from 'prop-types';
import FriendCard from './FriendCard';
import s from './friendList.module.css'

function FriendList({data}) {
    return (
        <ul className={s.list}>
            <FriendCard friends={data}/>
</ul>
)
}

export default FriendList;