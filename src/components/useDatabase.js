import axios from 'axios'

const HOST = "https://list-maker-version-2.herokuapp.com/"

const useDatabase = () => {

  const getLists = async () => {

    let lists = []
    
    await axios.post(HOST, {type: "getLists"})
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

  const adminLogin = async (USERNAME, PASSWORD) => {
    await axios.post(HOST, {
      type: "admin", 
      username: USERNAME, 
      password: PASSWORD
    })
      .then(() => alert("switched accounts!"))
      .catch(err => console.log(err))
  }

  return [getLists, addList, removeList, adminLogin]
}

export default useDatabase
