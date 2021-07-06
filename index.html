checkUsers(printList)
showCard()
login()
createAccount()
newList(getUserId)
goBack()
logout()


function checkUsers(callback) {
    // checks if there is any logged user
    auth.onAuthStateChanged((user) => {
        if (user) {
            console.log("user loged");
            $("#logOutBtn").removeClass("d-none")
            $("#loginCard").addClass("d-none")
            $("#createCard").addClass("d-none")
            $("#userListItem").addClass("d-none")
            $("#listCard").removeClass("d-none")
            callback(user.uid) //go back to user list

        } else {
            console.log("no one loged");
        }
    });
}
function login() {
    // login system
    let loginBtn = document.getElementById("loginBtn")
    let username = document.getElementById("usernameField")
    let password = document.getElementById("passField")


    loginBtn.addEventListener('click', () => {
        let userList = document.getElementById("userList")
        userList.innerHTML = ""
        auth.signInWithEmailAndPassword(username.value, password.value)
            .then((userCredential) => {
                let user = userCredential.user.uid;
                console.log("login sucess, user ID: ", user);
                $("#loginCard").addClass("d-none")
                $("#createCard").addClass("d-none")
                $("userListItem").addClass("d-none")
                $("#listCard").removeClass("d-none")
                $("#logOutBtn").removeClass("d-none")
                window.location.reload(false);
            })
            .catch((error) => {
                alert(error)
            });

    })
}
function createAccount() {
    // create account system
    let createAccountBtn = document.getElementById("createAccountBtn")
    let username = document.getElementById("createAccountField")
    let password = document.getElementById("createPasswordField")
    createAccountBtn.addEventListener('click', () => {
        auth.createUserWithEmailAndPassword(username.value, password.value)
            .then((userCredential) => {
                console.log("conta criada");
                $("#loginCard").addClass("d-none")
                $("#createCard").addClass("d-none")
                $("#listCard").removeClass("d-none")
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                alert(error)
                // ..
            });
    })
}
function showCard() {
    // siwtch between login and create account interface
    let firstTimeBtn = document.getElementById("firstTimeBtn")
    let goToLogin = document.getElementById("goToLoginBtn")
    let login = document.getElementById("loginCard")
    let create = document.getElementById("createCard")

    firstTimeBtn.addEventListener('click', () => { //show create account
        login.classList.add("d-none")
        create.classList.remove("d-none")
    })

    goToLogin.addEventListener('click', () => { //show login
        create.classList.add("d-none")
        login.classList.remove("d-none")
    })
}
function getUserId() {
    //get the user id
    return auth.currentUser.uid

}
function newList(userId) {
    // function to create a new list
    let newListBtn = document.getElementById("newListBtn")
    let newListName = document.getElementById("newListName")
    let addItemBtn = document.getElementById("addItemBtn")
    let goBackBtnNewList = document.getElementById("goBackBtnNewList")
    let newListTitle = document.getElementById("newListTitle")


    newListBtn.addEventListener('click', () => { //set list name

        if (newListName.value !== "") {
            $("#newList").removeClass("d-none")
            $("#loginCard").addClass("d-none")
            $("#createCard").addClass("d-none")
            $("#listCard").addClass("d-none")
            $("#userListItem").addClass("d-none")
            newListTitle.innerText = newListName.value
            addedItems.innerText = ""
            db.collection(userId()).doc(newListName.value).set(
                {
                    list: []
                }
            ).then(() => {
                console.log("inserido com sucesso");
            }).catch(error => {
                console.log(error);
            })
        } else {
            alert("you need to name the list!")
        }
    })

    addItemBtn.addEventListener('click', () => {//add list items
        if (newItem.value !== "") {

            let newItem = document.getElementById("newItem")
            let p = document.createElement("li")
            let addedItems = document.getElementById("addedItems")
            p.innerText = newItem.value
            p.classList.add("list-group-item", "list-group-item-action", "bg-def", "text-center")

            db.collection(userId()).doc(newListName.value).update(
                {
                    list: firebase.firestore.FieldValue.arrayUnion(newItem.value)
                }
            ).then(() => {
                console.log("inserido com sucesso");
                addedItems.appendChild(p)
                newItem.value = ""
            }).catch(error => {
                console.log(error);
            })
        } else {
            alert("field can't be empty")
        }
    })

    goBackBtnNewList.addEventListener('click', () => {//go back to user list menu
        $("#newList").addClass("d-none")
        $("#loginCard").addClass("d-none")
        $("#createCard").addClass("d-none")
        $("#listCard").removeClass("d-none")
        $("#userListItem").addClass("d-none")
        checkUsers(printList)
        newListName.value = ""
    })
}
function printList(userId) {
    let userList = document.getElementById("userList")
    userList.innerHTML = ""

    db.collection(userId).get().then((snapshot) => { //create user list
        snapshot.forEach((doc) => {
            let newElement = document.createElement("a")
            newElement.classList.add("list-group-item", "list-group-item-action", "bg-def", "text-center")
            newElement.innerText = doc.id
            userList.appendChild(newElement)

        })
        let a = document.getElementsByTagName("a")
        function addClick() { //add click for each list
            getList(userId, event.target.innerText,)
        }
        for (let i = 0; i < a.length; i++) {
            a[i].addEventListener('click', addClick)
        }

    })

    function getList(userId, listId) {
        // Other functions
        deleteList(userId, listId)
        addNewItemToList()
        let deleteItemBtn = document.getElementById("deleteItem")
        deleteItemBtn.addEventListener('click', deleteItem)
        // Other functions


        let userListItem = document.getElementById("userListItemDiv")
        userListItem.innerHTML = ""
        let listTitle = document.getElementById("listTitle")

        db.collection(userId).doc(listId).get() //Show user clicked list
            .then((doc) => {
                let listArray = doc.data().list
                listTitle.innerText = listId

                $("#loginCard").addClass("d-none")
                $("#createCard").addClass("d-none")
                $("#listCard").addClass("d-none")
                $("#userListItem").removeClass("d-none")

                for (i = 0; i < listArray.length; i++) { //get the list from database
                    let p = document.createElement("li")
                    p.innerText = listArray[i]
                    p.classList.add("list-group-item", "list-group-item-action", "bg-def", "text-center")
                    userListItem.appendChild(p)
                }


            })
            .catch(err => {
                console.log(err);
            })
    }

}
function deleteList(userId, listId) {
    let check = document.getElementById("deleteListBtn")

    if (check == null) {//create delete button
        let btnDiv = document.getElementById("btnDiv")
        let deleteListBtn = document.createElement('button')
        deleteListBtn.classList.add("rounded", "btn-outline-dark", "ms-2", "me-2")
        deleteListBtn.id = "deleteListBtn"
        deleteListBtn.innerText = "Delete List"
        btnDiv.appendChild(deleteListBtn)
        deleteListBtn.addEventListener('click', deleteClick)

        function deleteClick() {
            db.collection(userId).doc(listId).delete()
                .then(() => {
                    console.log("lista deletada com sucesso", listId);
                    checkUsers(printList)
                    btnDiv.removeChild(deleteListBtn)
                })
                .catch(err => {
                    console.log(err);
                })
        }
    } else { //don't let creat multiple buttons
        console.log("button already exists");
    }
}
function addNewItemToList() {
    let editListBtn = document.getElementById("editListBtn")
    editListBtn.addEventListener("click", addNewItem)
}
function goBack() {
    //go back to users list
    let goBackBtn = document.getElementById("goBackBtn")
    let editBtn = document.getElementById("newInputDiv")


    goBackBtn.addEventListener('click', () => {
        editBtn.innerHTML=""
        console.log("oi");
        let editListBtn = document.getElementById("editListBtn") //remove event listner to avoid multiple event trigger
        editListBtn.removeEventListener("click", addNewItem)

        let deleteItemBtn = document.getElementById("deleteItem") //remove event listner to avoid multiple event trigger
        deleteItemBtn.removeEventListener('click', deleteItem)
        $("#newList").addClass("d-none")
        $("#loginCard").addClass("d-none")
        $("#createCard").addClass("d-none")
        $("#listCard").removeClass("d-none")
        $("#userListItem").addClass("d-none")
    })
}
function logout() {
    //logout function
    let userListItem = document.getElementById("userListItemDiv")
    userListItem.innerHTML = ""
    let userList = document.getElementById("userList")
    userList.innerHTML = ""
    let logOutBtn = document.getElementById("logOutBtn")
    logOutBtn.addEventListener('click', () => {
        auth.signOut().then(() => {
            console.log("log out sucess");
            $("#logOutBtn").addClass("d-none")
            $("#loginCard").removeClass("d-none")
            $("#createCard").addClass("d-none")
            $("userListItem").addClass("d-none")
            $("#listCard").addClass("d-none")
            $("#newList").addClass("d-none")
            $("#usernameField").val("")
            $("#passField").val("")
            window.location.reload(false);
        }).catch((error) => {
            console.log(error);
        });
    })
}
function addNewItem() { //add a new item input
    let check = document.getElementById("newItemInput")


    if (check == null) {
        let userListItemDiv = document.getElementById("newInputDiv")

        let addBtn = document.createElement("button")
        addBtn.innerText = "add"
        addBtn.classList.add("rounded", "btn-outline-dark")

        let newItemInput = document.createElement("input")
        newItemInput.classList.add("rounded", "btn-outline-dark")
        newItemInput.placeholder = "New Item"
        newItemInput.id = "newItemInput"


        userListItemDiv.appendChild(newItemInput)
        userListItemDiv.appendChild(addBtn)


        addBtn.addEventListener('click', () => {//add list items
            if (newItemInput.value !== "") {
                let p = document.createElement("li")
                let userListItemDiv = document.getElementById("userListItemDiv")
                p.innerText = newItemInput.value
                p.classList.add("list-group-item", "list-group-item-action", "bg-def", "text-center")

                db.collection(getUserId()).doc($("#listTitle").text()).update(
                    {
                        list: firebase.firestore.FieldValue.arrayUnion(newItemInput.value)
                    }
                ).then(() => {
                    console.log("inserido com sucesso");
                    userListItemDiv.appendChild(p)
                    newItemInput.value = ""
                }).catch(error => {
                    console.log(error);
                })
            } else {
                alert("field can't be empty")
            }
        })

    } else console.log
        ("button already exists");
}
function deleteItem(){
    alert("Click the item to delete")
    let itensToDel = document.querySelectorAll("li")

    for (let i = 0; i < itensToDel.length; i++) {
        itensToDel[i].addEventListener('click', () => {
            let item = event.target
            db.collection(getUserId()).doc($("#listTitle").text()).update({
                list: firebase.firestore.FieldValue.arrayRemove(event.target.innerText)
            }).then(()=>{
                console.log("item removido com sucesso");
                console.log(item);
                item.remove()
            })
              .catch(error =>{
                console.log(error);
            })
        })
    }
}
