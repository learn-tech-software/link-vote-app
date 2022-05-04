let ITEMS_KEY = "items"

function addToDb(state){
    localStorage.setItem(ITEMS_KEY, JSON.stringify(state))
}

function getAllFromDb(){
    var storedData = localStorage.getItem(ITEMS_KEY)
    if(storedData){
        return JSON.parse(storedData);
    }else{
        return []
    }
}

function removeFromDb(title){
    var storedData = localStorage.getItem(ITEMS_KEY)
    if(storedData){
        let items = JSON.parse(storedData)
        const i = items.findIndex(x => x.title == title)
        if (i > -1) items.splice(i, 1)
        addToDb(items)
    }
}

function upVoteToDb(incrementTitle){
    var storedData = localStorage.getItem(ITEMS_KEY)
    if(storedData){
        let items = JSON.parse(storedData)
        let i = items.findIndex(x => x.title == incrementTitle)
        items[i].voteCount += 1
        addToDb(items)
    }
}

function downVoteToDb(decrementTitle){
    var storedData = localStorage.getItem(ITEMS_KEY)
    if(storedData){
        let items = JSON.parse(storedData)
        let i = items.findIndex(x => x.title == decrementTitle)
        items[i].voteCount -= 1
        addToDb(items)
    }
}


export { addToDb, getAllFromDb, removeFromDb, upVoteToDb, downVoteToDb }