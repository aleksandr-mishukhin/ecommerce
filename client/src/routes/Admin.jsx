import { Button, Input, Select, } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import React, { useState } from 'react'
import {createProduct} from "../api/products"
const Admin = () => {
  const [file, setFile] = useState()
  const selectFile = e => {
      setFile(e.target.files[0])
  }
  const handleSubmit = async (name, category, price, manufacturer, provider, count, description, image) => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('category', category)
    formData.append('manufacturer', manufacturer)
    formData.append('provider', provider)
    formData.append('count', count)
    formData.append('description', description)
    formData.append('image', file)
    formData.append('price', price)
    await createProduct(formData)
  }
  return (
    <div className='flex justify-center items-center flex-col gap-5 mt-5'>
      <div className='flex flex-col max-w-[1500px] m-auto p-10'>
        <h1 className='m-auto text-2xl mt-5 mb-5'>Добавить продукт</h1>
        <Formik
          initialValues={{
            name: '',
            category: 'Спортивный инвентарь',
            price: '',
            manufacturer: '',
            provider: '',
            count: '',
            description: '',
            image: '',
          }}
          onSubmit={async ({name, category, price, manufacturer, provider, count, description}) => {
            await handleSubmit(name, category, price, manufacturer, provider, count, description)
          }}
        >
        {({
          handleChange,
        }) => (
          <Form className='flex flex-col w-full max-w-[700px] m-auto'>
            <label htmlFor="name" className='mt-5 mb-3'>Наименование</label>
            <Input
              id="name"
              name="name"
              placeholder="Air Force 1"
              type="text"
              className='mb-5'
              onChange={handleChange}
            />
            <label htmlFor="category" className='mt-5 mb-3'>Категория</label>
            <Select
              id="category"
              name="category"
              defaultValue="Спортивный инвентарь"
              className='mb-5'
              onChange={handleChange}
            >
              <option>Спортивный инвентарь</option>
              <option>Одежда</option>
            </Select>
            <label htmlFor="price" className='mt-5 mb-3'>Цена</label>
            <Input
              id="price"
              name="price"
              placeholder="420.69"
              type="number"
              onChange={handleChange}
              className='mb-5'
            />
            <label htmlFor="manufacturer" className='mt-5 mb-3'>Производитель</label>
            <Input
              id="manufacturer"
              name="manufacturer"
              placeholder="NiKe"
              type="text"
              onChange={handleChange}
              className='mb-5'
            />
            <label htmlFor="provider" className='mt-5 mb-3'>Поставщик</label>
            <Input
              id="provider"
              name="provider"
              placeholder="AliExpress"
              type="text"
              onChange={handleChange}
              className='mb-5'
            />
            <label htmlFor="count" className='mt-5 mb-3'>Количество</label>
            <Input
              id="count"
              name="count"
              placeholder="150"
              type="number"
              onChange={handleChange}
              className='mb-5'
            />
            <label htmlFor="description" className='mt-5 mb-3'>Описание</label>
            <Input
              id="description"
              name="description"
              placeholder="Sport shoes"
              type="text"
              onChange={handleChange}
              className='mb-5'
            />
            <label htmlFor="image" className='mt-5 mb-3'>Картинка</label>
            <Input
              id="image"
              name="image"
              placeholder="Sport shoes"
              type="file"
              className='mb-5'
              onChange={selectFile}
            />
            <Button type="submit" className='w-full m-auto' borderColor="rgb(118, 227, 131)" variant="outline">Добавить</Button>
          </Form>
        )}
      </Formik>
    </div>
  </div>
  )
}

export default Admin