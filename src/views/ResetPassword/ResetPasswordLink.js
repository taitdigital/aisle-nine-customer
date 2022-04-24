import React from 'react'
import ResetPasswordForm from '../../components/Forms/ResetPasswordForm'

import { Card } from '../../components/UI/Card'

export default function ResetPasswordLink() {
  return (
    <div className="pt-6">
        <Card title="Reset Password">
            <ResetPasswordForm />
        </Card>
    </div>
  )
}