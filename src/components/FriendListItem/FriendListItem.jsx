import css from "../FriendList/FriendList.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      {isOnline ? <p>Online</p> : <p>Offline</p>}
    </div>
  );
};

export default FriendListItem;
