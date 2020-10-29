let url = 'http://barsapi.valgrifer.fr/api';

export function getBar () {
  return fetch(url + "/bar",{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }}).then((response) => response.json())
      .catch((error) => console.error(error))
}

export function getUsers () {
  return fetch(url + "/utilisateur",{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }}).then((response) => response.json())
      .catch((error) => console.error(error))
}

export function getSingleBar (id) {
  return fetch(url + '/bar/' + id,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }}).then((response) => response.json())
      .catch((error) => console.error(error))
}

export function getCommentsBar (id) {
  return fetch(url + '/comments/' + id,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }}).then((response) => response.json())
      .catch((error) => console.error(error))
}
<<<<<<< HEAD
export function addCommentsBar (values) {
  return fetch(url + '/comments',{
=======

export function addCommentsBar (values) {
console.log(values);
  return fetch(url + '/comments' ,{
>>>>>>> a465fedf0aec0078b769c04ede4870efac129a3e
    method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values),
    }).then((response) => response.json())
      .catch((error) => console.error(error))
}

export function getUser (id) {
  return fetch(url + '/utilisateur/' + id,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }}).then((response) => response.json())
      .catch((error) => console.error(error))
}

export function updateBar (id, values) {
  return fetch(url + '/bar/' + id,{
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values),
    }).catch((error) => console.error(error))
}

export function loginUser(values) {
<<<<<<< HEAD
=======
  console.log(values);
>>>>>>> a465fedf0aec0078b769c04ede4870efac129a3e
  return fetch(url + '/utilisateur/login',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values),
<<<<<<< HEAD
  }).then((response) => response.json())
  .catch((error) => console.error(error))
}

export function signInUser(values) {
=======
  })
  .then((response) => response.json())
  .catch((error) => console.error(error))
}

export function addUser(values) {
  console.log(values);
>>>>>>> a465fedf0aec0078b769c04ede4870efac129a3e
  return fetch(url + '/utilisateur',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values),
<<<<<<< HEAD
  }).then((response) => response.json())
=======
  })
  .then((response) => response.json())
>>>>>>> a465fedf0aec0078b769c04ede4870efac129a3e
  .catch((error) => console.error(error))
}
export function getEventsBar (id) {
  return fetch(url + '/events/' + id,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }}).then((response) => response.json())
      .catch((error) => console.error(error))
}

export function addEventsBar (values) {
console.log(values);
  return fetch(url + '/events' ,{
    method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values),
    }).then((response) => response.json())
      .catch((error) => console.error(error))
}
