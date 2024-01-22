import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { nanoid } from 'nanoid'
import { mixed, object, string } from 'yup'
import PropTypes from 'prop-types';

import './mainForm.scss'

const MAX_FILE_SIZE = 800_000;
const initialValues = {
  title: '',
  body: '',
  image: '',
}

const validationSchema = object().shape({
  title: string().required(),
  body: string().required(),
  image: mixed()
    .test('images size text', 'max image size value 4mb', (value) => {
      console.log('value:', value);
      return (value && value.size <= MAX_FILE_SIZE)
    }).required('File is required')
})

MainForm.propTypes = {
  setLoaging: PropTypes.func.isRequired
}

export default function MainForm({ setLoaging }) {

  const handleSubmit = (values, { resetForm }) => {
    setLoaging(true)
    const data = {
      id: nanoid(5),
      ...values,
      image: `./images/${values.image.name}`
    }
    resetForm()

    axios.post('http://localhost:3000/posts', data)
      .then(res => console.log(res))
      .finally(() => {
        setTimeout(() => {
          setLoaging(() => false)
        }, 2000)
      })
  }

  return (
    <div className='MainForm'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {
          ((formik) => {
            return (
              <Form>
                <div className='Form-group'>
                  <label htmlFor="title">Title</label>
                  <Field type='text' name='title' id='title' />
                  <ErrorMessage name='title' component='p' className='errormessage' />
                </div>
                <div className='Form-group'>
                  <label htmlFor="body">Body</label>
                  <Field as='textarea' name='body' id='body' rows={8} />
                  <ErrorMessage name='body' component='p' className='errormessage' />
                </div>
                <div className='Form-group'>
                  <label htmlFor="image">Poster</label>
                  <Field type='file' name='image' id='image' onChange={(event) => {

                    formik.setFieldValue("image", event.currentTarget.files[0]);

                  }} value={undefined} />
                  <ErrorMessage name='image' component='p' className='errormessage' />
                </div>
                <div className='Form-group'>

                  <Field type='submit' value='add post' />
                </div>
              </Form>
            )
          })
        }
      </Formik>
    </div>
  )
}
