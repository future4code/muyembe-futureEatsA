export const register = (history) => {
    history.push('/cadastro')
}

export const address = (history) => {
    history.push('/endereco')
}

export const login = (history) =>{
    history.push('./login')
}

export const previousPage = (history) => {
    history.goBack()
}

export const restaurant = (history, id) => {
    history.push(`/restaurante/${id}`)
}