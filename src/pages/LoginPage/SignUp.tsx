// type Props = {};

import React from "react";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { hiddenSpinner, showSpinner } from "../../util/util";
import { https } from "../../services/config";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: FormSignUpData) => {
    const data = {
      account: values.account,
      password: values.password,
      fullName: values.fullName,
      email: values.email,
    };
    console.log(data);
    const postProduct = async () => {
      showSpinner();
      try {
        const res = await https.post("/auth/register", data);
        if (res) {
          message.success("Đăng ký thành công!");
          navigate("/login");
          hiddenSpinner();
        }
      } catch (error) {
        hiddenSpinner();
        message.error(error.response.data.message);
        console.log(error);
      }
    };
    postProduct();
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <h3 className=" text-2xl text-slate-700 mb-1">Đăng ký</h3>
      <Form
        layout="vertical"
        name="basic"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
      >
        <Form.Item
          label="Tài khoản"
          name="account"
          rules={[
            { required: true, message: "Vui lòng nhập trường này!" },
            {
              min: 6,
              max: 25,
              message: "Tài khoản phải từ 6 đến 25 ký tự!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Họ tên"
          name="fullName"
          rules={[
            { required: true, message: "Vui lòng nhập trường này!" },
            {
              min: 6,
              max: 25,
              message: "Họ tên phải từ 6 đến 25 ký tự!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập trường này!" },
            {
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Email không hợp lệ!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            { required: true, message: "Vui lòng nhập trường này!" },
            {
              min: 6,
              max: 25,
              message: "Mật khẩu phải từ 6 đến 25 ký tự!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Nhập lại mật khẩu"
          name="rePassword"
          rules={[
            { required: true, message: "Vui lòng nhập trường này!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("Mật khẩu không khớp!");
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <div className="flex justify-between sm:items-end items-start gap-1 sm:flex-row flex-col pt-2">
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="text-white bg-slate-800"
            >
              Thêm mới
            </Button>
          </Form.Item>
          <Link to="/login" className="text-xs text-slate-500 mb-3">
            Bạn đã có tài khoản?
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
