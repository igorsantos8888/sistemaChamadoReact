import { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../contexts/auth'

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {

    const { signed, loading } = useContext(AuthContext)


    if (loading) {
        return (
            <div></div>
        )
    }

    //* Se o user não estiver logado e tentar acessar uma tela privada ele será redirecionado para tela de login
    if (!signed && isPrivate) {
        return <Redirect to='/' />
    }

    //* Se o user estiver logado e tentar acessar a tela de login ele será redirecionado para tela de dashboard
    if (signed && !isPrivate) {
        return <Redirect to='/dashboard' />
    }

    return (
        <Route
            {...rest}
            render={props => (
                <Component {...props} />
            )}

        />
    )
}