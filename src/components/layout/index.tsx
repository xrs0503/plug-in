
import { Menu } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
export interface layoutProps{
    items:any
}

export const Layouts:React.FC<layoutProps>=(props)=>{
    const navigate = useNavigate()
    const onClick = (route:any) => {
        const path = route.key
        navigate(path)
      };
      return (
        <Menu
          onClick={onClick}
          style={{
            width: 256,
            height:'89vh'
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['1']}
          mode="inline"
          items={props.items}
        />
      );
}
export default Layouts