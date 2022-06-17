import React from 'react';
// import ReactDOM from 'react-dom/client'
import { response } from '../response';
import { useEffect, useState } from "react"
let index=0;
export default function Name(){
	// const { rank, name, points, age} = response.list[index];
	const [data,setData]=useState([])


	// console.log(response)
	// // const data=response.list
	// console.log(data)
	const temp=response.list

	useEffect(()=>{
		// setData([...temp]);
        function GetSortOrder(prop){
            return function(a,b){
                if(a[prop]>b[prop]){
                    return 1;
                }
                else if(a[prop]<b[prop]){
                    return -1;
                }
                return 0;
            }
        }
        temp.sort(GetSortOrder("name"))
        setData([...temp]);

  
    },[])
	function increment(){
		index++;
	}



	return (
		<div className="text-center mt-50">
			
			

			<div>
				<div>
					<button data-testid="route-rank" className='outlined' type="button" >Rank</button>
					<button data-testid="route-name" className='outlined' type="button">Name</button>
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
					{increment}
				</>
				
					
			))}
				</table>
			</div>
		</div>
	);
}