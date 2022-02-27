import React from 'react';
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice';
import Spinner from'../components/Spinner'
import Signin from '../components/Signin';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} =  formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth)

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    if(isSuccess || user){
      navigate('/')
    }
    dispatch(reset())

  },[user, isSuccess, isError, message, navigate, dispatch])



  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
  }

  if(isLoading){
    return <Spinner />
  }

  return (
    <Signin/>
  )
}

export default Login