import AddFriend from "../../../SVG/AddFriend";
import style from "./HomeBody.module.css";

const AllFriends = () => {
  return (
    <section className={style.addFriendContainer}>
      <div className={style.friendInput}>
        <h3>ADD FRIEND</h3>
        <p>You can add a friend with their Discord Tag.it's cAsE sEnSitIVe!</p>
        <div>
          <input type="text" placeholder="Enter a Username#00000" />
          <button>Send Friend Request</button>
        </div>
      </div>
      <div>
        <AddFriend></AddFriend>
        <p>Wumpus is waitting on friends. You don;t have to though</p>
      </div>
    </section>
  );
};

export default AllFriends;
