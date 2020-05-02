import {
    // call,
    takeEvery,
    // put,
    // race,
    // all,
    // delay,
    // take,
} from 'redux-saga/effects';

// import * as actions from '../actions/instances';
import * as types from '../types/petOwners';
import * as actions from '../actions/petOwners';

const API_BASE_URL = 'http://localhost:8000/api/v1';

function* fetchPetOwners(action) {
    console.log("ALGO", action);
}

function* addPetOwner(action) {
    console.log("ALGO", action);
}

function* removePetOwner(action) {
    console.log("ALGO", action);
}



export function* watchPetOwnerFetchingStarted() {
    yield takeEvery(
        types.PET_OWNERS_FETCH_STARTED,
        fetchPetOwners,
    );
}

export function* watchPetOwnerCreation() {
    yield takeEvery(
        types.PET_OWNER_ADD_STARTED,
        addPetOwner,
    );
}

export function* watchPetOwnerDestruction() {
    yield takeEvery(
        types.PET_OWNER_REMOVE_STARTED,
        removePetOwner,
    );
}
