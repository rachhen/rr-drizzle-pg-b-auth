import { Form } from "react-aria-components";
import { Link } from "react-router";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { FieldError, Label } from "~/components/ui/field";
import { Input, TextField } from "~/components/ui/textfield";

function Page() {
  return (
    <Card className="max-w-sm w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form
          className="flex flex-col gap-2"
          validationErrors={{
            email: "Email is required",
            password: "Password is required",
          }}
        >
          <TextField name="email" type="email">
            <Label>Email</Label>
            <Input />
            <FieldError />
          </TextField>
          <TextField name="password" type="password">
            <Label>Password</Label>
            <Input />
            <FieldError />
          </TextField>
          <Button className="w-full" type="submit">
            Login
          </Button>
          <p className="text-muted-foreground text-sm">
            Don't have an account?
            <Link to="/register" className="hover:underline ml-2">
              Register
            </Link>
          </p>
        </Form>
      </CardContent>
    </Card>
  );
}

export default Page;
