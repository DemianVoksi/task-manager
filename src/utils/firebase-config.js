import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCU7EwQTFxFL6fNe4ab22oLj7JBGY9bwaw',
	authDomain: 'task-manager-b5362.firebaseapp.com',
	projectId: 'task-manager-b5362',
	storageBucket: 'task-manager-b5362.appspot.com',
	messagingSenderId: '49585478242',
	appId: '1:49585478242:web:58c24ce614b5bd357ccf3b',
	measurementId: 'G-9RVSEW287Z',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
