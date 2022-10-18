import axios from 'axios'

const HOST = "https://list-maker-version-2.herokuapp.com/"

const useDatabase = () => {

  const getLists = async () => {

    let lists = []
    
    await axios.get(HOST)
      .then(res => lists = res)
        .catch(err => console.log(err))

    return lists
  }

  const addList = async (LIST, NAME) => {
    await axios.post(HOST, {
      name: NAME,
      list: JSON.stringify(LIST), 
      type: "insert"})
      .then(() => alert("List Saved!"))
        .catch(err => console.log(err))
  }

  const removeList = async (NAME) => {
    await axios.post(HOST, {name: NAME})
      .catch(err => console.log(err))
  }

  return [getLists, addList, removeList]
}

export default useDatabase
