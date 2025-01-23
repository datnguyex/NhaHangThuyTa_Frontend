import { ref, get } from 'firebase/database';
import { Databasez } from '~/firebase';
export const fetchMenuData = async () => {
    try {
        const menuRef = ref(Databasez, 'MenuMeal');
        const snapshot = await get(menuRef);

        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log('No data available');
            return null;
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
        return null;
    }
};
export const fetchMealListData = async () => {
    try {
        const menuRef = ref(Databasez, 'MealList');
        const snapshot = await get(menuRef);

        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log('No data available');
            return null;
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
        return null;
    }
};
