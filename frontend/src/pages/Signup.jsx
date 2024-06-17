import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import axios from "axios";
import { Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    const data = {
      email,
      password,
    };

    setLoading(true);

    axios
      .post("http://localhost:5555/users", data)
      .then((response) => {
        setLoading(false);

        if (response.status === 200) {
          console.log("User registered successfully");
          message.success("Registration successful");
          navigate("/signin");
        } else {
          console.error("Registration failed with status:", response.status);
          message.error("Registration failed");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error during registration:", error);
        message.error("Error during registration");
      });
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />

      <Grid
        item
        xs={false}
        sm={2}
        md={7}
        sx={{
          backgroundImage: `url(https://thumbs.dreamstime.com/b/worker-tool-belt-isolated-over-white-background-89819307.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100%",
        }}
      />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            width:"100%",
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            
          }}
        >
          <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  }}
>
  <Avatar sx={{ bgcolor: "secondary.main" }} />
</div>
          <Typography textAlign='center'component="h1" variant="h5" mt={2}>
            Sign up with Quick Helper
          </Typography>
          <Form
  layout="vertical"
  sx={{ width: '200px',  mt: 3, mb: 2 }}
  className="login-form p-5"
  onFinish={handleRegister}
>
  <Form.Item name="email" label="User Name" rules={[{ required: true }]} sx={{ width: '80%' }}>
    <Input
      value={email}
      type="text"
      style={{ marginBottom: "16px" }}
      placeholder="User Name"
      onChange={(e) => setEmail(e.target.value)}
    />
  </Form.Item>

  <Form.Item name="password" label="Password" rules={[{ required: true }]} sx={{ width: '80%' }}>
    <Input.Password
      value={password}
      style={{ marginBottom: "16px" }}
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
    />
  </Form.Item>

  <Form.Item
    name="cpassword"
    label="Confirm Password"
    dependencies={["password"]}
    hasFeedback
    rules={[
      {
        required: true,
        message: "Please confirm your password",
      },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error("The two passwords do not match"));
        },
      }),
    ]}
    sx={{ width: '80%' }}
  >
    <Input.Password />
  </Form.Item>

  <Button
  type="submit"
  variant="contained"
  sx={{ width: '100%', height: '30px', mt: 3, mb: 2 }}
>
  {loading ? "Registering..." : "Sign Up"}
</Button>

  <br />
  <div>Click Here to Sign In</div>
  <Link to="/signin">
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
                </Link>
  
</Form>

        </Box>
      </Grid>
    </Grid>
  );
}

export default Signup;