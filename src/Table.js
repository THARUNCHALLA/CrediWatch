import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Table = () => {
    const Data = useSelector((s)=>s)
    const dispatch = useDispatch()
    const tharun= async (id)=>{
        console.log(id)
        const Data = await fetch("https://cdn.crediwatch.com/assets/json/test.json")
        const Response = await Data.json()
        dispatch({type:"Add",payload:{Data:Response,Id:id}})

    }

  return (
    <div className="table-responsive" style={{height:"82vh"}}>
      <table className="table table-bordered mx-auto" style={{ width: "100px",marginTop:"100px" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Slug</th>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Data.map(each=>
            <tr>
              <td onClick={()=>tharun(each.id)}>{each.id}</td>
                <td onClick={()=>tharun(each.id)}>{each.slug}</td>
                <td onClick={()=>tharun(each.id)}>{each.title}</td>
                <td onClick={()=>tharun(each.id)}>{each.status}</td>
                <td onClick={()=>tharun(each.id)}>{each.category}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
