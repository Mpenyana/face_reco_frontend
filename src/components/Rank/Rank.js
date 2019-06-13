import React from 'react';

const Rank = ({name, entries}) =>{
	return(
		<div>
			<div className= 'white f4 f2-l f3-m'>
				{`${name}, your current entries count is...`}
			</div>
			<div className= 'white f2'>
				{entries}
			</div>
		</div>
	)
}

export default Rank;