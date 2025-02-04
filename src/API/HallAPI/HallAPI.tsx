import { ref, get } from 'firebase/database';
import { Databasez } from '~/firebase';
export const fetchHallDataExcludingKimSen = async () => {
    try {
        const hallRef = ref(Databasez, 'Hall');
        const snapshot = await get(hallRef);

        if (snapshot.exists()) {
            const data = snapshot.val();

            const { KimSen, ...restData } = data;
            return restData;
        } else {
            console.log('No data available');
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
};
export const fetchHallDataExcludingNganSen = async () => {
    try {
        const hallRef = ref(Databasez, 'Hall');
        const snapshot = await get(hallRef);

        if (snapshot.exists()) {
            const data = snapshot.val();
            const { NganSen, ...restData } = data;
            return restData;
        } else {
            console.log('No data available');
            return [];
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
        return []; // Trả về mảng rỗng trong trường hợp có lỗi
    }
};
export const fetchHallDataExcludingThanhSen = async () => {
    try {
        const hallRef = ref(Databasez, 'Hall');
        const snapshot = await get(hallRef);

        if (snapshot.exists()) {
            const data = snapshot.val();
            const { ThanhSen, ...restData } = data;
            return restData;
        } else {
            console.log('No data available');
            return [];
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
        return [];
    }
};
export const fetchHallDataExcludingThuyenRong = async () => {
    try {
        const hallRef = ref(Databasez, 'Hall');
        const snapshot = await get(hallRef);

        if (snapshot.exists()) {
            const data = snapshot.val();
            const { ThuyenRong, ...restData } = data;
            return restData;
        } else {
            console.log('No data available');
            return [];
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
        return [];
    }
};
