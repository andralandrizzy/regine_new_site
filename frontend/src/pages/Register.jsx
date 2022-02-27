import React from 'react';
import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice';
import Spinner from'../components/Spinner'
import Register from '../components/Register';


const RegisterUser = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   password2: '',
  // })

  // const {name, email, password, password2} = formData

  // const navigate = useNavigate()
  // const dispatch = useDispatch()

  // const {user, isLoading, isError, isSuccess, message} = useSelector(
  //   (state) => state.auth)

  // useEffect(()=>{
  //   if(isError){
  //     toast.error(message)
  //   }
  //   if(isSuccess || user){
  //     navigate('/')
  //   }
  //   dispatch(reset())

  // },[user, isSuccess, isError, message, navigate, dispatch])

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }))
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   if(password !== password2){
  //     toast.error('Password do not match')
  //   } else {
  //     const userData = {
  //       name,
  //       email,
  //       password,
  //     }
  //     dispatch(register(userData))
  //   }
  // }

  // if(isLoading){
  //   return <Spinner />
  // }

  return (
    <>
      <Register/>
    </>
  )
}

export default RegisterUser