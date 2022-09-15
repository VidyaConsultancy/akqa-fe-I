function getUserProfileWithComments(userId, cb) {
  getUserProfile(userId, (error, userProfile) => {
    if (error) {
      return error;
    }
    getUserPost(userProfile, (error, userPosts) => {
      if (error) {
        return error;
      }
      getUserPostComments(userPosts, (error, userPostComments) => {
        if (error) {
          return error;
        }
        cb(error, userPostComments);
      })
    })
  })
}

function getUserProfileWithCommentsPromiseV1(userId) {
  return new Promise((resolve, reject) => {
    getUserProfile(userId)
      .then((userProfile) => {
        getUserPost(userProfile)
          .then((userPosts) => {
            getUserPostComments(userPosts)
              .then((userPostComments) => {
                resolve(userPostComments);
              }).catch((error) => {
                reject(error)
              })
          }).catch((error) => {
            reject(error)
          })
      }).catch((error) => {
        reject(error)
      })
  })
}

// fun().then(onFullfill).then().then().catch()

function getUserProfileWithCommentsPromiseV2(userId) {
  return new Promise((resolve, reject) => {
    getUserProfile(userId)
      .then(userProfile => getUserPost(userProfile))
      .then(userPosts => getUserPostComments(userPosts))
      .then(userPostComments => resolve(userPostComments))
      .catch((error) => {
        reject(error)
      })
  })
}

// using async await
// const fun = async function() {}
// const funFun = async () => {}
async function getUserProfileWithCommentsPromiseV3(userId) {
  try {
    const userProfile = await getUserProfile(userId);
    const userPosts = await getUserPost(userProfile);
    const userPostComments = await getUserPostComments(userPosts);
    return userPostComments;
  } catch (error) {
    return error;
  }
}

// Promise API ES6 ~ ES2015
// Promise -> state
// pending
// fullfilled
// rejected

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I am resolved.');
    reject('I am rejected');
  }, 1000)
});

console.log(promise);

promise
  .then((result) => {
    console.log(result);
  })
  .catch(error => console.error(error))
  .finally(() => {
    console.log('I run all the time.')
  })
// Async Await ES8 ~ ES2017

function sleep(ms = 1000) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
  return promise;
}

sleep().then(() => {

})

/**
 * state1
 * state2
 * setTimeout(() => {
 *  state3
 *  state4
 *  setTimeout(() => {
 *    state5
 *    state6
 *  }, 1000)
 * }, 1000)
 * 
 */

function ajax(method, endpoint, data, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, endpoint);
  xhr.onreadystatechange = (e) => {
    if (e.target.readyState === 4) {
      cb(e.target.response);
    }
  }
  xhr.send(data)
}

function ajaxPromise(method, endpoint, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, endpoint);
    xhr.onreadystatechange = (e) => {
      if (e.target.readyState === 4) {
        if (e.target.state === 200) {
          resolve(e.target.response)
        }
        reject(e.target.response)
      }
    }
    xhr.send(data)
  })
}
