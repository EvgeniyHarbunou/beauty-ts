import { takeEvery, put} from 'redux-saga/effects';
import { createSlice } from '@reduxjs/toolkit';

export const datesFeautre = createSlice({
    name: 'dates',
    initialState: {
        loading: false,
        today: new Date(),
        list: [],
        errors: [],
    },
    reducers: {
        fetchDatesRequest: state => {
            state.loading = true;
        },
        fetchDatesFail: (state, action) => {
            state.loading = false;

        },
        fetchDatesSuccess: (state, action) => {
            state.loading = false;

        },


    },
},
)

export const {
    fetchDatesRequest,
    fetchDatesSuccess,
    fetchDatesFail,
} = datesFeautre.actions;
export default datesFeautre.reducer;

function* fetchDatesWorker(actions: any) {
    try {
    } catch (e) {
        yield put(fetchDatesFail(e.message));
    }
}


export function* datesSaga() {
    yield takeEvery(fetchDatesRequest().type, fetchDatesWorker);
}
