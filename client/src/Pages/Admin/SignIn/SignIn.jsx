import React from 'react'
import {Layout,Tabs} from 'antd'
import {Redirect} from 'react-router-dom'
import Logo from '../../../Assets/img/png/muvalogo_clean.png'
import './SignIn.scss'

const SignIn = () => {

   const {Content} = Layout;
   const {TabPanel} = Tabs;

   return (
      <Layout>
         <Content className='sign-in__content'>
            <h1 className='sign-in__content-logo'>
               <img src={Logo} alt="Brandon Vargas" />
            </h1>
         </Content>
      </Layout>
   )
}

export default SignIn
