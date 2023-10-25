import React, { useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import { UnorderedListOutlined,GithubOutlined} from '@ant-design/icons';
import '../header/index.css';
const { Header } = Layout;

export type navigationMenuType={
   key:string,
   name:string,
   url?:string
}
export type applicationMenuType={
   icon?:string
   name?:string
   url?:string
}
export type userInfoType={
    username?:string,
    avatar?:string,
    other?:any
}
export interface HeaderProps{
  navigationMenu:navigationMenuType[]
  applicationMenu:applicationMenuType[]
  userInfo:userInfoType
}

export const NavBar:React.FC<HeaderProps>=(props)=>{
  const [current, setCurrent] = useState(props.navigationMenu[0]);
  const handleChange = (item:any) => {
      setCurrent(item);
  }

  return (
      <div>
        <Header className='header'>
            <div className='header-left'>
              
               <div className='apply-icon'>
                  <UnorderedListOutlined style={{fontSize:'30px'}}/>
                  <div className="apply-dialaing">
                     <div className='apply-data'>
                         {props.applicationMenu.map((item:any) => (
                             <div className='apply-item'  key={item.key}>
                                 <img className='apply-img' src={item.icon}></img>          
                                 <div>{item.name}</div>
                             </div>
                         ))}
                     </div>
                  </div>
              </div>
              <div style={{marginRight:'20px'}}>
                  <img style={{width:'280px',height:'100%'}} src='https://th.bing.com/th/id/R.d11776bef8e3f0c587f9d45335750320?rik=ZND%2b%2b1Y%2bmPG36g&riu=http%3a%2f%2fwww.logomister.cn%2fupfiles%2fimage%2f%e6%b7%b1%e5%9c%b3logo%e8%ae%be%e8%ae%a1W140.jpg&ehk=%2fezYZkwS6OEe3Nkmt0lHS2Kq1DLJKQgGbEpvXKajcxo%3d&risl=&pid=ImgRaw&r=0'></img>
              </div>
            </div>
        
            <Menu
               className='navigationMenu'
               mode="horizontal"
               defaultSelectedKeys={[current.key]}
               onClick={({ key }) => handleChange(props.navigationMenu.find((item:any) => item.key === key))}
            >
                {props.navigationMenu.map((item:any) => (
                      <Menu.Item  className="navigationMenu-item" style={{marginRight:'30px',borderRadius:'10px'}} key={item.key}>{item.name}</Menu.Item>
                ))}
            </Menu>
           
            <div>
                <input type="checkbox" id="dark-light" />
                <label htmlFor="dark-light"></label>
            </div>
            <GithubOutlined style={{fontSize:'43px'}}/>
            <div>
                <div className='userClick'>
                <img className="user" src={props.userInfo.avatar}/>
                <div className="user-dialaing">
                    <div className='setCenter'>
                        <img className="useritem" src={props.userInfo.avatar}/>
                    </div>
                    <span className='setCenter'>{props.userInfo.username}</span>
                    <Button style={{width:'200px',marginTop:'120px'}}>退出登录</Button>
                </div>
            </div>
                
         </div>
              
        </Header>
    
      </div>
  );
};
export default NavBar;