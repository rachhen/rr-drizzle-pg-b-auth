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
        <CardTitle className="text-2xl">Register</CardTitle>
      </CardHeader>
      <CardContent>
        <Form
          className="flex flex-col gap-2"
          validationErrors={{
            name: "Name is required",
            email: "Email is required",
            password: "Password is required",
          }}
        >
          <TextField name="name" type="text">
            <Label>Name</Label>
            <Input />
            <FieldError />
          </TextField>
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
            Already have an account?
            <Link to="/login" className="hover:underline ml-2">
              Login
            </Link>
          </p>
        </Form>
      </CardContent>
    </Card>
  );
}

export default Page;
