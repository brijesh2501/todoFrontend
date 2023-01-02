import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { getTodo } from "../store/actionCreators"
import { Dispatch } from "redux"
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';
import env from "react-dotenv";

const Detail: React.FC = () => {
  const searchParams = useParams();
  const todo = useSelector(
    (state: TodoState) => state.todo,
    shallowEqual
  )

  useEffect(():any => {
     axios.get(`${env.API_URL}/todos/${searchParams.id}`)
      .then(res => {
        if(res.data){
          dispatch(getTodo(res.data))
        }
    });
  }, []);

  const dispatch: Dispatch<any> = useDispatch()

    return (
      <div className="Todo">
        <div>
          <h1>{todo?.title}</h1>
          <p>{todo?.description}</p>
          <Link to="/">Back To Home</Link>
        </div>
      </div>
      );
};
export default Detail
