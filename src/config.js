import firebase from 'firebase';

export const appName = 'advanced-react';
export const firebaseConfig = {
	apiKey: 'AIzaSyDcyOHdr4n4Lxm4_whjAEF-uZUwIICMrmM',
	authDomain: `${appName}-b796f.firebaseapp.com`,
	databaseURL: `https://${appName}-b796f.firebaseio.com`,
	projectId: `${appName}-b796f`,
	storageBucket: `${appName}-b796f.appspot.com`,
	messagingSenderId: '1082108413572',
};

firebase.initializeApp(firebaseConfig);
