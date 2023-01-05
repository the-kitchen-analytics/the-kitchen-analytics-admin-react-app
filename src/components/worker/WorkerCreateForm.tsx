import { useState } from 'react'
import { Form } from 'semantic-ui-react'
import { handleInputChange } from '../../utils'

export default function WorkerCreateForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    workerCategory: ''
  })

  return (
    <Form>
      <Form.Group widths='equal'>
        <Form.Input
          required
          label={'Имя'}
          type='text'
          name={'name'}
          value={formData.name || ''}
          onChange={(e) => handleInputChange(e, setFormData)}
        />

        <Form.Input
          required
          icon={'at'}
          iconPosition={'left'}
          label={'Email'}
          type='email'
          name={'email'}
          value={formData.email || ''}
          onChange={(e) => handleInputChange(e, setFormData)}
        />

        <Form.Input
          required
          label={'Категория мастера'}
          type='text'
          name={'workerCategory'}
          value={formData.workerCategory || ''}
          onChange={(e) => handleInputChange(e, setFormData)}
        />
      </Form.Group>
    </Form>
  )
}