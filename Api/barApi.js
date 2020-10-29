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
>>>>>>> 38a7f786def4b1c36ff879f0cfaf28e8a1c90b4b
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
  console.log(values);
  return fetch(url + '/utilisateur/login',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values),
<<<<<<< HEAD
  })
  .then((response) => response.json())
  .catch((error) => console.error(error))
}

export function addUser(values) {
  console.log(values);
=======
  }).then((response) => response.json())
  .catch((error) => console.error(error))
}
// 
// export function signInUser(values) {
//   })
//   .then((response) => response.json())
//   .catch((error) => console.error(error))
// }

export function addUser(values) {
  console.log(values);

>>>>>>> 38a7f786def4b1c36ff879f0cfaf28e8a1c90b4b
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
>>>>>>> 38a7f786def4b1c36ff879f0cfaf28e8a1c90b4b
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
