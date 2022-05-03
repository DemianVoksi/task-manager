import React, { useState } from 'react';

function ShowParticipants({ participants }) {
	const [show, setShow] = useState(false);

	const toggleShow = () => {
		setShow(!show);
	};

	return (
		<div>
			<button onClick={toggleShow}>Show participants</button>
			{show ? (
				<div>
					{participants.map((participant) => (
						<div>{participant}</div>
					))}
				</div>
			) : null}
		</div>
	);
}

export default ShowParticipants;
