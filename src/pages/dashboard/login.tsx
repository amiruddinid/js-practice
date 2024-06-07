import { useState, ChangeEvent, FormEvent } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useAuth } from '../../hooks/useAuth';

//TODO: refactor form

export default function login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()

  const emailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const passwordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/api/v1/login", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    const data = await res.json()
    login(data.data)
  }

  return (
    <div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup floating>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
            onChange={(e) => emailHandler(e)}
          />
          <Label for="exampleEmail">Email</Label>
        </FormGroup>{" "}
        <FormGroup floating>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            onChange={(e) => passwordHandler(e)}
          />
          <Label for="examplePassword">Password</Label>
        </FormGroup>{" "}
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
