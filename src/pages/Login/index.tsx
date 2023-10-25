import {Card,Form,Input,Button} from 'antd'
import '../Login/index.css'
const Login=()=>{
    return (
       <div className='login'>
           <Card className='login-container'>
               <Form>
                  <Form.Item>
                      <Input size="large" placeholder='请输入账号'/>
                  </Form.Item>
                  <Form.Item>
                      <Input  size="large" placeholder='请输入密码'/>
                  </Form.Item>
                  <Form.Item>
                      <Button type='primary' htmlType='submit' size='large' block>
                         登录  
                      </Button>
                  </Form.Item>
               </Form>
           </Card>
       </div>
    )
}
export default Login