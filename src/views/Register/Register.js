import React from 'react'
import RegisterForm from '../../components/Forms/RegisterForm'

import { Card } from '../../components/UI/Card'

export default function Register() {
  return (
    <div className="pt-6 w-2/5">
        <Card title="Register">
            <RegisterForm />
        </Card>
    </div>
  )
}