import AppNavBar from '../../components/header';
import Layouts from '../../components/layout'

import { MailOutlined } from '@ant-design/icons'
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
const { Content,Sider } = Layout;
const LayoutView=()=>{
    const items = [
        { key: '1', name: '首页' },
        { key: '2', name: '用户管理' },
        { key: '3', name: '商品管理' },
        { key: '4', name: '订单管理' },
        { key: '5', name: '系统管理' },
      ];
      const menus=[
        {icon:'https://th.bing.com/th/id/R.65e439879aa61497589862adad1f88f6?rik=OnHEYk9Sg3c7cw&riu=http%3a%2f%2fimg.wxcha.com%2ffile%2f202006%2f22%2fdb25a003b3.jpg&ehk=wRlMNjVQkBZ9U9p2wFUdWHOFPnawtRlcG6Uj2KWIggE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',name:'Maps'},
        {icon:'https://th.bing.com/th/id/R.65e439879aa61497589862adad1f88f6?rik=OnHEYk9Sg3c7cw&riu=http%3a%2f%2fimg.wxcha.com%2ffile%2f202006%2f22%2fdb25a003b3.jpg&ehk=wRlMNjVQkBZ9U9p2wFUdWHOFPnawtRlcG6Uj2KWIggE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',name:'Maps'},
        {icon:'https://th.bing.com/th/id/R.65e439879aa61497589862adad1f88f6?rik=OnHEYk9Sg3c7cw&riu=http%3a%2f%2fimg.wxcha.com%2ffile%2f202006%2f22%2fdb25a003b3.jpg&ehk=wRlMNjVQkBZ9U9p2wFUdWHOFPnawtRlcG6Uj2KWIggE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',name:'Maps'},
        {icon:'https://th.bing.com/th/id/R.65e439879aa61497589862adad1f88f6?rik=OnHEYk9Sg3c7cw&riu=http%3a%2f%2fimg.wxcha.com%2ffile%2f202006%2f22%2fdb25a003b3.jpg&ehk=wRlMNjVQkBZ9U9p2wFUdWHOFPnawtRlcG6Uj2KWIggE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',name:'Maps'},
        {icon:'https://th.bing.com/th/id/R.65e439879aa61497589862adad1f88f6?rik=OnHEYk9Sg3c7cw&riu=http%3a%2f%2fimg.wxcha.com%2ffile%2f202006%2f22%2fdb25a003b3.jpg&ehk=wRlMNjVQkBZ9U9p2wFUdWHOFPnawtRlcG6Uj2KWIggE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',name:'Maps'},
        {icon:'https://th.bing.com/th/id/R.65e439879aa61497589862adad1f88f6?rik=OnHEYk9Sg3c7cw&riu=http%3a%2f%2fimg.wxcha.com%2ffile%2f202006%2f22%2fdb25a003b3.jpg&ehk=wRlMNjVQkBZ9U9p2wFUdWHOFPnawtRlcG6Uj2KWIggE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',name:'Maps'},
        {icon:'https://th.bing.com/th/id/R.65e439879aa61497589862adad1f88f6?rik=OnHEYk9Sg3c7cw&riu=http%3a%2f%2fimg.wxcha.com%2ffile%2f202006%2f22%2fdb25a003b3.jpg&ehk=wRlMNjVQkBZ9U9p2wFUdWHOFPnawtRlcG6Uj2KWIggE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',name:'Maps'},
        {icon:'https://th.bing.com/th/id/R.65e439879aa61497589862adad1f88f6?rik=OnHEYk9Sg3c7cw&riu=http%3a%2f%2fimg.wxcha.com%2ffile%2f202006%2f22%2fdb25a003b3.jpg&ehk=wRlMNjVQkBZ9U9p2wFUdWHOFPnawtRlcG6Uj2KWIggE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',name:'Maps'},
        {icon:'https://th.bing.com/th/id/R.65e439879aa61497589862adad1f88f6?rik=OnHEYk9Sg3c7cw&riu=http%3a%2f%2fimg.wxcha.com%2ffile%2f202006%2f22%2fdb25a003b3.jpg&ehk=wRlMNjVQkBZ9U9p2wFUdWHOFPnawtRlcG6Uj2KWIggE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',name:'Maps'},
      ]
      const LayoutItems=[
        {label:'用户管理',key:'',icon:<MailOutlined />,children:[{label:'新增用户',key:'/home',icon:<MailOutlined/>},{label:'修改用户',key:'/home',icon:<MailOutlined/>},{label:'删除用户',key:'/home',icon:<MailOutlined/>}]},
        {label:'用户管理',key:'/',icon:<MailOutlined />},
        {label:'用户管理',key:'/home',icon:<MailOutlined />},
        {label:'用户管理',key:'/home',icon:<MailOutlined />},
        {label:'用户管理',key:'/home',icon:<MailOutlined />},
        {label:'用户管理',key:'/home',icon:<MailOutlined />},
        {label:'用户管理',key:'/home',icon:<MailOutlined />},
        {label:'用户管理',key:'/home',icon:<MailOutlined />},
        {label:'用户管理',key:'/home',icon:<MailOutlined />},
        {label:'用户管理',key:'/home',icon:<MailOutlined />}
      ]
      const userInfo={
        avatar:'https://th.bing.com/th/id/R.65e439879aa61497589862adad1f88f6?rik=OnHEYk9Sg3c7cw&riu=http%3a%2f%2fimg.wxcha.com%2ffile%2f202006%2f22%2fdb25a003b3.jpg&ehk=wRlMNjVQkBZ9U9p2wFUdWHOFPnawtRlcG6Uj2KWIggE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
        username:'超级管理员'
      }
      return (
        <Layout>
          <AppNavBar navigationMenu={items} applicationMenu={menus} userInfo={userInfo}/>
          <Layout>
            <Sider>
            <Layouts items={LayoutItems}/>
            </Sider>
            <Layout style={{ padding: '0 24px 24px',marginLeft:'40px' }}>
            <Content
                style={{
                  padding: 10,
                  margin:20,
                  minHeight: 280,
                  background: 'white',
                }}
              >
                <Outlet/>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      );
}
export default LayoutView