import React from 'react'
import { Card } from '../../components/UI/Card'
import LoginForm from '../../components/Forms/LoginForm'


export default function Login() {
    return(
        <div className="pt-6 w-[380px]">    
            <Card title="Login">
                <LoginForm />
            </Card> 
        </div>
    )
}