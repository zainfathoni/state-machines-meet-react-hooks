import { Button as AntButton, Modal as AntModal } from 'antd'
import React from 'react'

export const Button = props => <AntButton size="large" {...props} />

export const Modal = props => (
  <AntModal centered footer={null} {...props}>
    Modal Content
  </AntModal>
)
