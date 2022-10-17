import axios from 'axios'

const HOST = "http://localhost:8000/"

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
      .then(res => console.log(res))
        .catch(err => console.log(err))
  }

  const removeList = async (RANK) => {
    axios.post(HOST, {rank: RANK})
      .then(res => console.log(res))
        .catch(err => console.log(err))
  }

  return [getLists, addList, removeList]
}

export default useDatabase