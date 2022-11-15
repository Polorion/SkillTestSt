import * as React from "react";
import S from "./Users.module.scss";
import Card from "./Card/Card";
import Pagination from "../../UI/Paginagtion/Pagination";

const Users = (props) => {
  return (
    <div className={S.bodyUser}>
      {props.user &&
        props.user.map((el) => {
          return (
            <Card
              key={el.id}
              id={el.id}
              img={el.avatar}
              name={el.first_name}
              lastName={el.last_name}
              like={el.like}
              likePhoto={props.likePhoto}
            />
          );
        })}
      <div>
        <Pagination
          allUser={props.allUserCount}
          userCount={props.countUser}
          activePage={props.activePage}
          getUsersThunk={props.getUsersThunk}
        />
      </div>
    </div>
  );
};

export default Users;
