//封装高阶组件
//核心逻辑：有token,正常跳转  无token,去登录
// import {getToken} from '../../utils'
import {Navigate} from 'react-router-dom'
export interface AuthRouteProps{
    children:any
}
export const AuthRoute:React.FC<AuthRouteProps>=(props)=>{
  // const token=getToken()
  const token='ss'
  if(token){
    return <>{props.children}</>
  }else{
    return <Navigate to={'/login'} replace/>
  }
}