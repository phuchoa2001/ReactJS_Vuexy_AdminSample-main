// ** Core JWT Import
import useJwt from '@src/@core/auth/jwt/useJwt'

const useHookJwt = () => {
    const { jwt } = useJwt({});
    return jwt
}

export default useHookJwt;
