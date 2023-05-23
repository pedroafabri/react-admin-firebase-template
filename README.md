# Generic Firebase React Admin

## Firebase Configuration

1. Set the project name at .firebaserc;
2. Create a firebase web-app;
3. Paste the config at src/firebaseConfig.ts;

## Firestore/Auth configuration

1. Enable Authentication and Firestore in your firebase project;
2. Crete an Authentication user and copy its UID;
3. Create a firestore collection called "users";
4. Create a new user with the following info:
   1. Document ID = UID
   2. typeUser = admin
   3. email = same email as auth user
   4. name = your user's full name