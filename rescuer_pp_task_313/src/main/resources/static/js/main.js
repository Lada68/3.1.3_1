const toggleAdminCards = ()=>{
  if(!document.getElementById('users-btn')) return
  if(!document.getElementById('newuser-btn')) return
  document.getElementById('users-btn').addEventListener('click', ()=>{
    document.getElementById('users').classList.remove('hidden')
    document.getElementById('newuser').classList.add('hidden')
    document.getElementById('users-btn').classList.add('active')
    document.getElementById('newuser-btn').classList.remove('active')
  })
  document.getElementById('newuser-btn').addEventListener('click', ()=>{
    document.getElementById('users').classList.add('hidden')
    document.getElementById('newuser').classList.remove('hidden')
    document.getElementById('users-btn').classList.remove('active')
    document.getElementById('newuser-btn').classList.add('active')
  })
}
const togglePages = ()=>{
  if(!document.getElementById('adminpage-btn')) return
  if(!document.getElementById('userpage-btn')) return
  document.getElementById('adminpage-btn').addEventListener('click', ()=>{
    document.getElementById('userpage').classList.add('hidden')
    document.getElementById('adminpage').classList.remove('hidden')
    document.getElementById('adminpage-btn').classList.add('active')
    document.getElementById('userpage-btn').classList.remove('active')
  })
  document.getElementById('userpage-btn').addEventListener('click', ()=>{
    document.getElementById('userpage').classList.remove('hidden')
    document.getElementById('adminpage').classList.add('hidden')
    document.getElementById('adminpage-btn').classList.remove('active')
    document.getElementById('userpage-btn').classList.add('active')
  })
}
const toggleDeleteModal = ()=>{
  if(!document.querySelector('.btn-delete')) return
  if(!document.querySelector('.modal-delete')) return
  let buttonArr = document.querySelectorAll('.btn-delete')
  for (let i = 0; i < buttonArr.length; i++) {
    buttonArr[i].addEventListener('click',()=>{
      document.querySelector('.modal-delete').style.display = "block"
      document.querySelector('.modal-delete').classList.add('show')
      toggleModalBackdrop()
    })
  }
  
}
const toggleEditModal = ()=>{
  if(!document.querySelector('.btn-edit')) return
  if(!document.querySelector('.modal-edit')) return
  let buttonArr = document.querySelectorAll('.btn-edit')
  for (let i = 0; i < buttonArr.length; i++) {
    buttonArr[i].addEventListener('click',()=>{
      document.querySelector('.modal-edit').style.display = "block"
      document.querySelector('.modal-edit').classList.add('show')
      toggleModalBackdrop()
    })
  }
}
const setDeleteModalId = (id)=>{
  document.getElementById('deleteid').value = id
}
const setEditModalId = (id)=>{
  document.getElementById('editid').value = id
}
const toggleModalBackdrop = ()=>{
  if(document.querySelector('.modal-backdrop').classList.contains('show')){
    document.querySelector('.modal-backdrop').classList.remove('show')
    document.querySelector('.modal-backdrop').style.display = "none"
  }else{
    document.querySelector('.modal-backdrop').classList.add('show')
    document.querySelector('.modal-backdrop').style.display = "block"
  }
}
const closeModal = ()=>{
  let modals = document.querySelectorAll('.modal')
  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.remove('show')
    modals[i].style.display = ""
  }
  toggleModalBackdrop()
}
// const login = ()=>{
//   let pass = document.getElementById('input-login').value
//   let login = document.getElementById('input-password').value
//   if(pass == null)return
//   if(login == null)return
//   fetch('http://127.0.0.1:5500/api/', {
//     method: 'POST',
//     body: JSON.stringify({
//       name: login,
//       password: pass
//     })
//   }).then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok.')
//     }else{
//       let json = response.json();
//       if(json.data.rules == "admin"){
//         window.location.replace(`http://127.0.0.1:5500/admin/?user=${json.data.userid}`)
//       }else{
//         window.location.replace(`http://127.0.0.1:5500/user/?user=${json.data.userid}`)
//       }
//     }
//   }).catch(console.error)
//   event.preventDefault();
// }
const changeData = ()=>{
  closeModal()
  event.preventDefault();
}
const deleteUser = ()=>{
  closeModal()
  event.preventDefault();
}
const addUser = ()=>{
  
}
const setUsersTable = ()=>{
  if(!document.querySelector('.table')) return
  let table = document.querySelector('.table')
  let responseData = []
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  for (let i = 0; i < responseData.length; i++) {
    const element = responseData[i];
    
  }
}
const setSelfUserInfo = ()=>{
  if(!document.getElementById('email')) return
  let strGET = window.location.search.replace( '?', '');
  let id = strGET.split('=')[1]
  document.getElementById('email').innerText = id
}
setSelfUserInfo()
setUsersTable()
toggleEditModal()
toggleDeleteModal()
toggleAdminCards()
togglePages()