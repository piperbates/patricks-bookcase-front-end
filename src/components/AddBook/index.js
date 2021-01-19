import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Form, Input, Button, Checkbox, message } from "antd";
import "./style.css";


export default function AddBook() {
  
  const { isAuthenticated } = useAuth0();

  const [form] = Form.useForm();
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  function success(bookTitle) {
    message.success(`${bookTitle} has been added to the library`);
  }

  function errorMessage() {
    message.error("This service is currently unavailable. Please try again later.");
  }

  const warning = () => {
    message.warning("Something went wrong. Please try again.");
  }; 

  const onFinish = (book) => {
    fetch(`https://patricks-bookshelf.herokuapp.com/add`, {
      method: "post",
      body: JSON.stringify({
        title: book.Title,
        author: book.Author,
        genre: book.Genre,
        read: book.read,
        series: book.Series,
        leant: book.Leant,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        success(book.Title);
        form.resetFields();
      })
      .catch((error) => {
        errorMessage();

        console.log(error, "Beepboop");
      });
    console.log({ book });
  };

  const onFinishFailed = (errorInfo) => {
      warning();
    console.log({ errorInfo });
  };

/* export default function LogOutButton() {
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return <></>
    } else {
    return (
    isAuthenticated &&
    <div id="add-book-button-box">
          <Link to="/add-book">
            <button id="add-book-button">Add New Book</button>
          </Link>
        </div>)
}} */

if (!isAuthenticated) {
    return <p>"You need to be logged in to view this page"</p>
  } 
  
  else {
    return (
    <div>
      <h1>Add New Book</h1>
      <div id="#add-book-form">
        <Form
          form={form}
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Title"
            name="Title"
            rules={[
              {
                required: true,
                message: "Please input the book title",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Author"
            name="Author"
            rules={[
              {
                required: true,
                message: "Please input author name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Genre"
            name="Genre"
            rules={[
              {
                required: true,
                message: "Please input genre",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout} name="read" valuePropName="checked">
            <Checkbox>I have read this book</Checkbox>
          </Form.Item>

          <Form.Item
            label="Series"
            name="Series"
            rules={[
              {
                required: false,
                message: "Input series if necessary",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Leant"
            name="Leant"
            rules={[
              {
                required: false,
                message: "Who have you leant this book to, if anyone",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );}
}
