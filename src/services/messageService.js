import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export const sendMessage = async (messageData) => {
    try {
        const dataWithTimestamp = {
            ...messageData,
            createdAt: new Date().toISOString(),
        };

        const docRef = await addDoc(collection(db, 'messages'), dataWithTimestamp);
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error('Error sending message:', error);
        return { success: false, error: error.message };
    }
};