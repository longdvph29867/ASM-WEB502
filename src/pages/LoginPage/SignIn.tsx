// type Props = {};

import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import { localUserService } from "../../services/localService";
import { hiddenSpinner, showSpinner } from "../../util/util";
import { https } from "../../services/config";

const SignIn: React.FC = () => {
  const onFinish = (values: FormSignInData) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    const postProduct = async () => {
      try {
        showSpinner();
        const res = await https.post("/auth/login", data);
        if (res) {
          const infoUser = {
            ...res.data.data,
          };
          localUserService.set(infoUser);
          hiddenSpinner();
          message.success("Đăng nhập thành công!");
          if (infoUser.role === "admin") {
            setTimeout(() => {
              window.location.href = "/admin/products";
            }, 1200);
          } else {
            setTimeout(() => {
              window.location.href = "/";
            }, 1200);
          }
        }
      } catch (error) {
        hiddenSpinner();
        console.log(error);
        message.error(error.response.data.message);
      }
    };
    postProduct();
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex flex-col justify-center h-full">
      <h3 className=" text-2xl text-slate-700 mb-1">Đăng nhập</h3>
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
          rules={[{ required: true, message: "Vui lòng nhập trường này!" }]}
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
              Đăng nhập
            </Button>
          </Form.Item>
          <Link to="/singup" className="text-xs text-slate-500 mb-3">
            Bạn chưa có tài khoản?
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
