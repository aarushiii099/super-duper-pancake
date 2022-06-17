import React from 'react';
// import ReactDOM from 'react-dom/client'
import { response } from '../response';
import { useEffect, useState } from "react"
import {BrowserRouter,Route} from "react-router-dom"
import {Routes} from "react-router-dom"
// import {Switch} from "react-router-dom"
import { useNavigate } from "react-router-dom"

import Rank from "./Rank"
import Name from "./Name"



let index=0;
function LeaderBoard(props) {
	// const { rank, name, points, age} = response.list[index];
	const [data,setData]=useState([])
	const navigate=useNavigate()
	// const [index,setIndex]=useState(0)

	// console.log(response)
	// // const data=response.list
	// console.log(data)
	const temp=response.list

	useEffect(()=>{
		setData([...temp]);
  
    },[])

	const handleRank=()=>{
		console.log("rank clicked")
		navigate("/rank")

	}
	const handleName=()=>{
		navigate("/name")

	}

	function increment(){
		index++;
	}

	return (
		<div className="text-center mt-50">
			{/* <BrowserRouter> */}
			<Routes>
				<Route path="/rank" element={<Rank></Rank>}></Route>
				<Route path="/name" element={<Name></Name>}></Route>
				
			</Routes>
			{/* </BrowserRouter> */}

			<div>
				<div>
					<button data-testid="route-rank" className='outlined' type="button" onClick={()=>handleRank}>Rank</button>
					<button data-testid="route-name" className='outlined' type="button" onClick={()=>handleName}>Name</button>
					<button data-testid="route-points" className='outlined' type="button">Points</button>
					<button data-testid="route-age" className='outlined' type="button">Age</button>
				</div>
			</div>
			<div className="card mx-auto pb-20 mb-30" style={{ width: '50%' }}>
				<table className="mt-50" data-testid="app-table">
					<thead>
						<tr>
							<th>Rank</th>
							<th>Name</th>
							<th className="numeric">Points</th>
							<th className="numeric">Age</th>
						</tr>
					</thead>
			{/* {console.log(data)} */}
			{data.map((item)=>(
				<>
				
				
					<tbody data-testid="app-tbody">
						<tr key={item.rank}>
							<td data-testid={`rank-${index}`}>{item.rank}</td>
							<td data-testid={`name-${index}`}>{item.name}</td>
							<td data-testid={`points-${index}`} className="numeric">{item.points}</td>
							<td data-testid={`age-${index}`} className="numeric">{item.age}</td>
						</tr>
					</tbody>

					{/* {setIndex(index+1)} */}
					{increment}

					</>
					
			))}
				</table>
			</div>
		</div>
	);
}

export default LeaderBoard;