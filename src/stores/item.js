import { defineStore } from 'pinia'
import { addToDb, getAllFromDb, removeFromDb, upVoteToDb, downVoteToDb } from '../services/localStorageService'

export const useItemStore = defineStore({
  id: 'item',
  state: () => ({
    orderType: 'date',
    storedItems: getAllFromDb(),
  }),
  getters: {
    /**
     * @returns {Array<{ title: string; link: string; voteCount: number; createdAt: Date; }>}
     */
    items: (state) => state.storedItems,
    orderItems: (state) => {
      if(state.storedItems){
        if (state.orderType == "mostvoted") {
          return state.storedItems.sort((a, b) => {
            if (parseInt(a.voteCount) < parseInt(b.voteCount)) {
              return 1
            }
            if (parseInt(a.voteCount) > parseInt(b.voteCount)) {
              return -1
            }
            return 0
          })
        } else if (state.orderType == "lessvoted") {
          return state.storedItems.sort((a, b) => {
            if (parseInt(a.voteCount) > parseInt(b.voteCount)) {
              return 1
            }
            if (parseInt(a.voteCount) < parseInt(b.voteCount)) {
              return -1
            }
            return 0
          })
        } else {
          return state.storedItems.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          })
        }
      }
    }
  },
  actions: {
    /**
     * Add item to the list
     * @param {string} title
     * @param {string} link
     */
    addItem(title, link) {
      let addedObject = {
        title: title,
        link: link,
        voteCount: 0,
        createdAt: Date.now()
      }
      this.storedItems.push(addedObject)
      addToDb(this.storedItems)
    },

    /**
     * Remove item from the list
     * @param {string} title
     */
    removeItem(removeTitle) {
      removeFromDb(removeTitle)
      const i = this.storedItems.findIndex(x => x.title == removeTitle)
      if (i > -1) this.storedItems.splice(i, 1)
    },

    /**
     * Increment vote count by title
     * @param {string} title
     */
    voteCountIncrement(incrementTitle) {
      var findElement = this.storedItems.find(x => x.title == incrementTitle)
      if (findElement) {
        this.orderType = "mostvoted"
        upVoteToDb(findElement.title)
        findElement.voteCount += 1;
      }
    },

    /**
     * Decrement vote count by title
     * @param {string} title
     */
    voteCountDecrement(decrementTitle) {
      var findElement = this.storedItems.find(x => x.title == decrementTitle)
      if (findElement) {
        this.orderType = "mostvoted"
        downVoteToDb(findElement.title)
        findElement.voteCount -= 1;
      }
    },

    /**
     * Set order Type
     * @param {string} orderType
     */
    setOrderType(orderType) {
      this.orderType = orderType
    }

  },
})

