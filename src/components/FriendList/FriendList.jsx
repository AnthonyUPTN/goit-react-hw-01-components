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

FriendList.defaultProps = {
    items: [],
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }))
}