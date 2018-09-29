import PouchDB from 'pouchdb';

const db = new PouchDB('todos');

const syncError = () => {
  console.log('error syncing');
};

export const inputContact = (contact, env) => {
  const todo = {
    _id: new Date().toISOString(),
    ...contact,
  };
  db.put(todo)
    .then(result => {
    })
    .catch(error => {
      console.log(error);
    });
  const opts = { live: true };
  const remoteCouch = `https://${env.CLOUDANT_USERNAME}:${env.CLOUDANT_PASSWORD}@${env.CLOUDANT_USERNAME}.cloudant.com/portfolio`;
  db.replicate.to(remoteCouch, opts, syncError);
  db.replicate.from(remoteCouch, opts, syncError);
}
