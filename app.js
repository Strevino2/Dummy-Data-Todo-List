 // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        let ol = document.getElementById('todo-list')
        for (let index = 0; index < arrayOfTodos.length; index++) {
            const obj = arrayOfTodos[index];
            console.log(obj)
            console.log(obj.title)
            let li = document.createElement('li')
            var title = document.createTextNode(obj.title)
            li.appendChild(title);
            ol.appendChild(li);
        }
    }

    const arrayOfTodos1 = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }
    ]

    console.log(arrayOfTodos[0].userId) // => 14
    console.log(arrayOfTodos[1].userId) // => 20

    const removeElements = () => {
       const allLiElements = document.querySelectorAll("li");
       for (let index = 0; index < allLiElements.length; index++) {
        const element = allLiElements[index];
        element.remove()
    }
    }

    const filterTodos = () => {
        removeElements()
        const userName = document.getElementById('numUser').value
        console.log(userName)
            let newArr = arrayOfTodos.filter((item)=>{
                console.log(item.userId)
                
                return item.userId == userName
            })
            console.log(newArr)
            let ol = document.getElementById('todo-list')
            for (let index = 0; index < newArr.length; index++) {
                if (newArr[index].completed == true) {
                    
                    const obj = newArr[index];
                    console.log(obj)
                    console.log(obj.title)
                    let li = document.createElement('li')
                    var title = document.createTextNode(obj.title)
                    li.appendChild(title);
                    ol.appendChild(li);
                }
            }   
    }

    const completeTodos = () => {
        removeElements ()
        let newArr1 = arrayOfTodos.filter((item1)=> {
            console.log(item1.completed)
            return item1.completed == true
        })
        console.log(newArr1)
        let ol = document.getElementById('todo-list')
        for (let index = 0; index < newArr1.length; index++) {
            if (newArr1[index].completed == true) {
                
                const obj = newArr1[index];
                console.log(obj)
                console.log(obj.title)
                let li = document.createElement('li')
                var title = document.createTextNode(obj.title)
                li.appendChild(title);
                ol.appendChild(li);
            }
        }   
}

const completeTodos = () => {
    removeElements ()
    let newArr1 = arrayOfTodos.filter((item1)=> {
        console.log(item1.completed)
        return item1.completed == true
    })
    console.log(newArr1)
    let ol = document.getElementById('todo-list')
    for (let index = 0; index < newArr1.length; index++) {
        if (newArr1[index].completed == true) {
            
            const obj = newArr1[index];
            console.log(obj)
            console.log(obj.title)
            let li = document.createElement('li')
            var title = document.createTextNode(obj.title)
            li.appendChild(title);
            ol.appendChild(li);
        }
    }  
}

const notCompleteTodos = () => {
    removeElements ()
    let newArr2 = arrayOfTodos.filter((item2)=> {
        console.log(item2.completed)
        return item2.completed == false
    })
    console.log(newArr2)
    let ol = document.getElementById('todo-list')
    for (let index = 0; index < newArr2.length; index++) {
        if (newArr2[index].completed == false) {
            
            const obj = newArr2[index];
            console.log(obj)
            console.log(obj.title)
            let li = document.createElement('li')
            var title = document.createTextNode(obj.title)
            li.appendChild(title);
            ol.appendChild(li);
        }
    }  
}


const separateTodos = () => {
    removeElements ()
    let newArr1 = arrayOfTodos.filter((item1)=> {
        console.log(item1.completed)
        return item1.completed == true
    })
    console.log(newArr1)
    let ol1 = document.getElementById('todo-list')
    for (let index = 0; index < newArr1.length; index++) {
        if (newArr1[index].completed == true) {
            
            const obj = newArr1[index];
            console.log(obj)
            console.log(obj.title)
            let li = document.createElement('li')
            var title = document.createTextNode(obj.title)
            li.appendChild(title);
            ol1.appendChild(li);
        }
    }  
    let newArr2 = arrayOfTodos.filter((item2)=> {
        console.log(item2.completed)
        return item2.completed == false
    })
    console.log(newArr2)
    let ol = document.getElementById('not-completeTodos')
    for (let index = 0; index < newArr2.length; index++) {
        if (newArr2[index].completed == false) {
            
            const obj = newArr2[index];
            console.log(obj)
            console.log(obj.title)
            let li = document.createElement('li')
            var title = document.createTextNode(obj.title)
            li.appendChild(title);
            ol.appendChild(li);
        }
    }  
}
=======
        }  
    }

    const notCompleteTodos = () => {
        removeElements ()
        let newArr2 = arrayOfTodos.filter((item2)=> {
            console.log(item2.completed)
            return item2.completed == false
        })
        console.log(newArr2)
        let ol = document.getElementById('todo-list')
        for (let index = 0; index < newArr2.length; index++) {
            if (newArr2[index].completed == false) {
                
                const obj = newArr2[index];
                console.log(obj)
                console.log(obj.title)
                let li = document.createElement('li')
                var title = document.createTextNode(obj.title)
                li.appendChild(title);
                ol.appendChild(li);
            }
        }  
    }

    
    const separateTodos = () => {
        removeElements ()
        let newArr2 = arrayOfTodos.filter((item2)=> {
            console.log(item2.completed)
            return item2.completed == false
        })
        console.log(newArr2)
        let ol = document.getElementById('todo-list')
        for (let index = 0; index < newArr2.length; index++) {
            if (newArr2[index].completed == false) {
                
                const obj = newArr2[index];
                console.log(obj)
                console.log(obj.title)
                let li = document.createElement('li')
                var title = document.createTextNode(obj.title)
                li.appendChild(title);
                ol.appendChild(li);
            }
        }  
        let newArr1 = arrayOfTodos.filter((item1)=> {
            console.log(item1.completed)
            return item1.completed == true
        })
        console.log(newArr1)
        let ol1 = document.getElementById('completeTodos')
        for (let index = 0; index < newArr1.length; index++) {
            if (newArr1[index].completed == true) {
                
                const obj = newArr1[index];
                console.log(obj)
                console.log(obj.title)
                let li = document.createElement('li')
                var title = document.createTextNode(obj.title)
                li.appendChild(title);
                ol1.appendChild(li);
            }
        }  
    }
