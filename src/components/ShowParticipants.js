import { arrayRemove, doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../firebase-config';

function ShowParticipants({ participants, task, fetchTasks }) {
	const [show, setShow] = useState(false);

	const toggleShow = () => {
		setShow(!show);
	};

	const removeParticipant = async (participant) => {
		const participantRef = doc(db, 'tasks', task.id);
		await updateDoc(participantRef, {
			allParticipants: arrayRemove(participant),
		});
		fetchTasks();
	};

	return (
		<div>
			<button onClick={toggleShow}>Show participants</button>
			{participants && show ? (
				<div>
					{participants.map((participant, index) => (
						<div key={index} className='single-participant-wrapper'>
							<div className='single-participant-address'>{participant}</div>
							<button
								className='single-participant-btn'
								onClick={() => removeParticipant(participant)}
							>
								Remove
							</button>
						</div>
					))}
				</div>
			) : null}
		</div>
	);
}

export default ShowParticipants;
