import s from './friendCard.module.css'

function FriendCard({ friends }) { 
    
    const elements = friends.map(el => {
        return (
            <li className={s.item} key={el.id}>
                <span className={`${s.status} ${el.isOnline ? s.online : false}`} ></span>
                <img className={s.avatar} src={el.avatar} alt="User avatar" width="48" />
                <p className={s.name}>{el.name}</p>
            </li>
        )
    })

    return elements;
}

export default FriendCard;