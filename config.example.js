/*
Get this information from the firebase console
Make sure that you enable the read permission on your database
You'll also need to insert some phrases into the database.

This is what the database of the sample application looks like:

{
   "speechKeys":[
      "gettysburg",
      "moon"
   ],
   "speeches":{
      "gettysburg":[
         "Four score and seven years ago",
         "our fathers brought forth on this continent,",
         "a new nation,",
         "conceived in Liberty,",
         "and dedicated to the proposition that all men are created equal."
      ],
      "moon":[
         "We choose to go to the moon.",
         "We choose to go to the moon in this decade  and do the other things,",
         "not because they are easy,",
         "but because they are hard,",
         "because that goal will serve to organize and measure the best of our energies and skills,",
         "because that challenge is one that we are willing to accept,",
         "one we are unwilling to postpone,",
         "and one which we intend to win,",
         "and the others, too."
      ]
   }
}
*/

export const firebaseConfig = {
    apiKey: 'API_KEY_HERE',
    authDomain: 'AUTH_DOMAIN_HERE',
    databaseURL: 'DATABASE_URL_HERE',
    storageBucket: 'STORAGE_BUCKET_HERE',
};
