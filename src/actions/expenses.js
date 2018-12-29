import uuid from 'uuid';

import database from '../firebase/firebase';

// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

export const addExpense = (expense = {}) => ({
  type: 'ADD_EXPENSE',
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;

    const expense = { description, note, amount, createdAt };

    return database.ref(`users/${uid}/expenses`).push(expense)
      .then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense,
        }));
      })
      .catch((err) => console.log(err));
  };
};

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove()
    .then(() => {
      dispatch(removeExpense({ id }));
    })
    .catch((err) => console.log('Error removing expense', err));
  }
  
}

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    }).catch((err) => console.log('Error updating expense in firebase', err));
  }
}

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// async
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value', (snapshot) => {
      const expenses = [];
      snapshot.forEach((snapshotItem) => {
        expenses.push({
          id: snapshotItem.key,
          ...snapshotItem.val()
        });
      });
      dispatch(setExpenses(expenses));
    })
  }
}