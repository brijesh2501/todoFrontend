import React, { useEffect,useState } from "react";
import { useParams,Link } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { getTodo } from "../store/actionCreators"
import axios from 'axios';
import env from "react-dotenv";

const Detail: React.FC = () => {
  const searchParams = useParams();
  const todos: ITodo[] = useSelector(
    (state: TodoState) => state.todos,
    shallowEqual
  )

  useEffect(():any => {
    let mounted = true;
     axios.get(`${env.API_URL}/todos/${searchParams.id}`)
      .then(res => {
        if(res.data){
          console.log(res.data);
          // dispatch(getTodo(res.data))
        }
    });
    return () => (mounted = false);
  }, []);
  const dispatch: Dispatch<any> = useDispatch()

    return (
      <div className="Todo">
        <div>
          <h1>Title</h1>
          <p>Description</p>
          <Link to="/">Back To Home</Link>
        </div>
      </div>
      );
};
export default Detail
