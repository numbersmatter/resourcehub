import React, { useRef, useState } from "react"
//import { Form, Button, Card, Alert } from "react-bootstrap"
import {FormControl as Form, FormGroup, FormControl, FormLabel, Card, CardContent, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <CardContent>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert severity="error" variant="outlined">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FormGroup id="email">
              <FormLabel>Email</FormLabel>
              <FormControl type="email" ref={emailRef} required />
            </FormGroup>
            <FormGroup id="password">
              <FormLabel>Password</FormLabel>
              <FormControl type="password" ref={passwordRef} required />
            </FormGroup>
            <FormGroup id="password-confirm">
              <FormLabel>Password Confirmation</FormLabel>
              <FormControl type="password" ref={passwordConfirmRef} required />
            </FormGroup>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </CardContent>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}
