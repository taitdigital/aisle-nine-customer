export const loadState = () => {
    try {
        const user = localStorage.getItem('user')
        const activeToken = localStorage.getItem('token')
      
        if (user === null || activeToken === null) {
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            return undefined
        }

        return {
            token: activeToken,  
            ...JSON.parse(user)
        }
    } catch (err) {
      return undefined
    }
  };
  

  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem('state', serializedState)
    } catch {
      // ignore write errors
    }
  }