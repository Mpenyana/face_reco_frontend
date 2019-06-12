import React from 'react';

const Rank = ({name, entries}) =>{
	return(
		<div>
			<div className= 'white f2'>
				{`${name}, your current entries count is...`}
			</div>
			<div className= 'white f2'>
				{entries}
			</div>
		</div>
	)
}

export default Rank;