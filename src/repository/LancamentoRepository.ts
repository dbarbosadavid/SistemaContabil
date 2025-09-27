import { get, push, ref, set } from "firebase/database";
import type Lancamento from "../model/Lancamento";
import { db } from "../firebase/firebase";



export const addLancamento = async (lancamento: Lancamento, user: any) => {
    if (user) {
        const newPostRef = await push(ref(db, 'user/' + user.uid + '/lancamentos'));
        set(newPostRef, lancamento.toJSON());
    }
}

export const getAllRepository = async (user: any) => {
    const dbRef = ref(db, 'user/' + user.uid + '/lancamentos')
    
    const response = await get(dbRef);
    
    return response;
}

